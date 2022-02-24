import {
    BeforeInsert,
    Column,
    CreateDateColumn,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn
} from "typeorm";

import {v4 as uuidV4 } from 'uuid';

import { MattersEntity } from "../../matters/entities/Matters.entity";
import { CoursesEntity } from "../../../domain/courses/entities/Courses.entity";

@Entity('teachers')
export class TeachersEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    name: string;
  
    @Column()
    email: string;
  
    @Column()
    cel: string;
  
    @CreateDateColumn({ type: 'timestamp'})
    createdAt: Date;
  
    @CreateDateColumn({ type: 'timestamp'})
    updatedAt: Date;

    @JoinTable({ name: 'teachers_matters' })
    @ManyToMany(() => MattersEntity, (matter) => matter.teachers, { cascade: true })
    matters: MattersEntity[];

    @BeforeInsert()
    generateID(){
        if (this.id) return;

        this.id = uuidV4();
    }
  
}
