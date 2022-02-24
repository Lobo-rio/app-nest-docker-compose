import {
    BeforeInsert,
    Column,
    CreateDateColumn,
    Entity,
    ManyToMany,
    PrimaryGeneratedColumn
} from "typeorm";
import { v4 as uuidV4 } from 'uuid';

import { CoursesEntity } from "../../../domain/courses/entities/Courses.entity";

@Entity('students')
export class StudentsEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    age: Date;

    @Column()
    series: number;

    @Column()
    email: string;

    @Column()
    cel: number;

    @CreateDateColumn({ type: 'timestamp'})
    createdAt: Date;

    @CreateDateColumn({ type: 'timestamp'})
    updatedAt: Date;

    /*@ManyToMany(()=> CoursesEntity, (student) => student.students)
    courses: CoursesEntity[];*/

    @BeforeInsert()
    generateId() {
        if (this.id) return;

        this.id = uuidV4();
    }
}
