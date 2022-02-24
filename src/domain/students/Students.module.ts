import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsEntity } from './entities/Students.entity';
import { StudentsController } from './Students.controller';
import { StudentsService } from './Students.service';

@Module({
  imports: [ TypeOrmModule.forFeature([ StudentsEntity ])],
  controllers: [StudentsController],
  providers: [StudentsService]
})
export class StudentsModule {}
