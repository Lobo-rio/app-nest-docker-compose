import { 
    BeforeInsert,
    Column, 
    CreateDateColumn, 
    Entity, 
    JoinTable,
    ManyToMany, 
    PrimaryGeneratedColumn 
} from "typeorm";

import { v4 as uuidV4 } from 'uuid';

import { StudentsEntity } from "../../../domain/students/entities/Students.entity";
import { TeachersEntity } from "../../../domain/teachers/entities/Teachers.entity";

@Entity()
export class CoursesEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    period: string;

    @CreateDateColumn({ type: 'timestamp'})
    createdAt: Date;

    @CreateDateColumn({ type: 'timestamp'})
    updatedAt: Date;

    @JoinTable({ name: 'courses_teachers' })
    @ManyToMany(() => TeachersEntity)
    teachers: TeachersEntity[];

    @JoinTable({ name: 'courses_students' })
    @ManyToMany(()=> StudentsEntity)
    students: StudentsEntity[];

    @BeforeInsert()
    genetrateId(){
        if (this.id) return;

        this.id = uuidV4();
    }

}
