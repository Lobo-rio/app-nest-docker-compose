import { BeforeInsert, Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import {v4 as uuidV4 } from 'uuid';

import { TeachersEntity } from "../../teachers/entities/Teachers.entity";

@Entity('matters')
export class MattersEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @CreateDateColumn({ type: 'timestamp'})
    createdAt: Date;
  
    @CreateDateColumn({ type: 'timestamp'})
    updatedAt: Date;

    @ManyToMany(()=> TeachersEntity, (teacher)=> teacher.matters)
    teachers: TeachersEntity[];

    @BeforeInsert()
    generateID(){
        if (this.id) return;

        this.id = uuidV4();
    }

}
