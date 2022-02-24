import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateStudentsDto {

    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    readonly age: Date;

    @IsNumber()
    @IsNotEmpty()
    readonly series: number;

    @IsEmail()
    @IsNotEmpty()
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    readonly cel: number;

}
