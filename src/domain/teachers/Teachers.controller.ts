import { 
    Body, 
    Controller, 
    Delete, 
    Get, 
    Param, 
    Patch, 
    Post 
} from '@nestjs/common';
import { CreateTeachersDto } from './dto/CreateTeachers.dto';
import { UpdateTeachersDto } from './dto/UpdateTeachers.dto';
import { TeachersService } from './Teachers.service';

@Controller('teachers')
export class TeachersController {

    constructor(
        private readonly service: TeachersService,
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
        create(@Body() createTeacherDto: CreateTeachersDto){
        return this.service.create(createTeacherDto);
    }

    @Patch(':id')
        update(@Param('id') id: string, @Body() updateTeacherDto: UpdateTeachersDto){
        return this.service.update(id, updateTeacherDto);
    }

    @Delete(':id')
        remove(@Param('id') id: string){
        return this.service.remove(id);
    }

}
