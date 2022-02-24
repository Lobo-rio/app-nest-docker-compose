import { PartialType } from "@nestjs/mapped-types";
import { CreateTeachersDto } from "./CreateTeachers.dto";

export class UpdateTeachersDto  extends PartialType(CreateTeachersDto) {}
