import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesController } from './Courses.controller';
import { CoursesService } from './Courses.service';
import { StudentsEntity } from '../students/entities/Students.entity';
import { TeachersEntity } from '../teachers/entities/Teachers.entity';
import { CoursesEntity } from './entities/Courses.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([ CoursesEntity, TeachersEntity, StudentsEntity ])],
  controllers: [CoursesController],
  providers: [CoursesService]
})
export class CoursesModule {}
