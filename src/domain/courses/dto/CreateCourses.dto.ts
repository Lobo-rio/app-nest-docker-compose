import { IsNotEmpty, IsString } from "class-validator";

export class CreateCoursesDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    readonly description: string;

    @IsNotEmpty()
    @IsString()
    readonly period: string;

    @IsNotEmpty()
    @IsString({ each: true })
    readonly teachers: string[];

    @IsNotEmpty()
    @IsString({ each: true })
    readonly students: string[];

}
