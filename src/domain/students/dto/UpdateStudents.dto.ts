import { PartialType } from "@nestjs/mapped-types";
import { CreateStudentsDto } from "./CreateStudents.dto";

export class UpdateStudentsDto extends PartialType(CreateStudentsDto) {}
