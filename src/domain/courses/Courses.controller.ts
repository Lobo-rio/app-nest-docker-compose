import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CoursesService } from './Courses.service';
import { CreateCoursesDto } from './dto/CreateCourses.dto';
import { UpdateCoursesDto } from './dto/UpdateCourses.dto';


@Controller('courses')
export class CoursesController {

    constructor(
        private readonly service: CoursesService,
    ){}

    @Get()
    findAll(){
        return this.service.findAll();
    }
    
    @Get(':id')
    findOne(@Param('id') id: string){
        return this.service.findOne(id);
    }

    @Post()
    create(@Body() createCourseDto: CreateCoursesDto){
        return this.service.create(createCourseDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCourseDto: UpdateCoursesDto){
        return this.service.update(id, updateCourseDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.service.remove(id);
    }

}
