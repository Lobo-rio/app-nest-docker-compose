import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTeachersDto {

    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    readonly cel: string;

    @IsString({ each: true })
    readonly matters: string[];

}
