import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { StudentsEntity } from '../students/entities/Students.entity';
import { TeachersEntity } from '../teachers/entities/Teachers.entity';
import { CoursesEntity } from './entities/Courses.entity';

import { CreateCoursesDto } from './dto/CreateCourses.dto';
import { UpdateCoursesDto } from './dto/UpdateCourses.dto';

@Injectable()
export class CoursesService {

    constructor(
        @InjectRepository(CoursesEntity)
        private readonly courseRepository: Repository<CoursesEntity>,

        @InjectRepository(TeachersEntity)
        private readonly teacherRepository: Repository<TeachersEntity>,

        @InjectRepository(StudentsEntity)
        private readonly studentRepository: Repository<StudentsEntity>,
    ){}
    
    findAll() {
        return this.courseRepository.find({
            relations: ['teachers', 'students']
        });
    }

    async findOne(id: string){
        const course = await this.courseRepository.findOne(id, {
            relations: ['teachers', 'students']
        });

        if (!course) throw new NotFoundException('Course not found!');

        return course;
    }

    async create(createCourseDto: CreateCoursesDto){
        const teachers = createCourseDto.teachers && (
            await Promise.all(createCourseDto.teachers.map((id)=> this.preloadTeacherByName(id)))
        );

        const students = createCourseDto.students && (
            await Promise.all(createCourseDto.students.map((id)=> this.preloadStudentByName(id)))
        );

        const course = this.courseRepository.create({
            ...createCourseDto,
            teachers,
            students,
        });

        return this.courseRepository.save(course);
    }

    async update(id: string, updateCourseDto: UpdateCoursesDto){
        const teachers = updateCourseDto.teachers && (
            await Promise.all(updateCourseDto.teachers.map((id)=> this.preloadTeacherByName(id)))
        );

        const students = updateCourseDto.students && (
            await Promise.all(updateCourseDto.students.map((id)=> this.preloadStudentByName(id)))
        );
       
        const course = await this.courseRepository.preload({
            id: id,
            ...updateCourseDto,
            teachers,
            students,
        }); 

        return this.courseRepository.save(course);
    }

    async remove(id: string){
        const course = await this.courseRepository.findOne(id);

        if (!course) throw new NotFoundException('Course not found!');

        return this.courseRepository.remove(course);
    }

    private async preloadTeacherByName(id: string){
        const teacher = await this.teacherRepository.findOne(id);

        if (!teacher) throw new NotFoundException(`Techaer ${id} not found!`)

        return teacher;
    }

    private async preloadStudentByName(id: string){
        const students = await this.studentRepository.findOne(id);

        if (!students) throw new NotFoundException(`Student ${id} not found!`);

        return students;
    }

}
