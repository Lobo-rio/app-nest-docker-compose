import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MattersEntity } from '../matters/entities/Matters.entity';

import { CreateTeachersDto } from './dto/CreateTeachers.dto';
import { UpdateTeachersDto } from './dto/UpdateTeachers.dto';
import { TeachersEntity } from './entities/Teachers.entity';

@Injectable()
export class TeachersService {

    constructor(
        @InjectRepository(TeachersEntity)
        private readonly teachersRepository: Repository<TeachersEntity>,
    
        @InjectRepository(MattersEntity)
        private readonly mattersRepository: Repository<MattersEntity>,
    ){}

    findAll(){
        return this.teachersRepository.find({
            relations: [ 'matters' ]
        });
    }

    async findOne(id: string){
        const teacher = await this.teachersRepository.findOne(id, {
            relations: [ 'matters' ]
        });

        if (!teacher) throw new NotFoundException('Teacher not found!');

        return teacher;
    }

    async create(createTeacherDto: CreateTeachersDto){
        const matters = await Promise.all(
            createTeacherDto.matters.map(name => this.preloadMatterByName(name))
        );
        
        const teacher = this.teachersRepository.create({
            ...createTeacherDto,
            matters,
        });

        return this.teachersRepository.save(teacher);
    }

    async update(id: string, updateTeacherDto: UpdateTeachersDto){
        const matters = updateTeacherDto.matters && (
            await Promise.all(updateTeacherDto.matters.map(name => this.preloadMatterByName(name)))
        );

        const teacher = await this.teachersRepository.preload({
            id: id,
            ...updateTeacherDto,
            matters
        });

        if (!teacher) throw new NotFoundException('Teacher not found!');

        return this.teachersRepository.save(teacher);
    }

    async remove(id: string){
        const teacher = await this.teachersRepository.findOne(id);

        if (!teacher) throw new NotFoundException('Teacher not found!');

        return this.teachersRepository.remove(teacher);
    }

    private async preloadMatterByName(name: string): Promise<MattersEntity>{
        const matter = await this.mattersRepository.findOne({name});

        if (matter) return matter;

        return this.mattersRepository.create({ name });
    }

}
