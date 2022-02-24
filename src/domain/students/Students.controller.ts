import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateStudentsDto } from './dto/CreateStudents.dto';
import { UpdateStudentsDto } from './dto/UpdateStudents.dto';
import { StudentsService } from './Students.service';

@Controller('students')
export class StudentsController {

    constructor(
        private readonly studentsService: StudentsService,
    ){}

    @Get()
    findAll(){
      return this.studentsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
      return this.studentsService.findOne(id);
    }

    @Post()
    create(@Body() createStudentDto: CreateStudentsDto) {
      return this.studentsService.create(createStudentDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentsDto) {
        return this.studentsService.update(id, updateStudentDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
      return this.studentsService.remove(id);
    }

}
