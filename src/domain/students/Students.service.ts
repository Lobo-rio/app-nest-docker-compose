import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentsDto } from './dto/CreateStudents.dto';
import { UpdateStudentsDto } from './dto/UpdateStudents.dto';
import { StudentsEntity } from './entities/Students.entity';


@Injectable()
export class StudentsService {

    constructor(
        @InjectRepository(StudentsEntity)
        private readonly studentsRepository: Repository<StudentsEntity>,
    ){}

    findAll() {
        return this.studentsRepository.find();
    }

    async findOne(id: string) {
        const student = await this.studentsRepository.findOne(id);

        if (!student) throw new NotFoundException('Student not found!');

        return student;
    }

    async create(createStudentDto: CreateStudentsDto ) {
        const student = this.studentsRepository.create(createStudentDto);

        return this.studentsRepository.save(student);
    }

    async update(id: string, updateStudentsDto: UpdateStudentsDto) {
        const student = await this.studentsRepository.preload({
            id: id,
            ...updateStudentsDto
        });

        if (!student) throw new NotFoundException('Student not found!');

        return this.studentsRepository.save(student);
    }

    async remove(id: string){
        const student = await this.studentsRepository.findOne(id);

        if (!student) throw new NotFoundException('Student not found!');

        return this.studentsRepository.remove(student);
    }

}
