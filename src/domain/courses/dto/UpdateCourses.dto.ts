import { PartialType } from "@nestjs/mapped-types";
import { CreateCoursesDto } from "./CreateCourses.dto";

export class UpdateCoursesDto extends PartialType(CreateCoursesDto) {}
