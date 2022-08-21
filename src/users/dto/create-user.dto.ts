import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;

  @IsEmail()
  @ApiProperty()
  email: string;

  @ApiProperty()
  gender: string;

  @ApiProperty()
  job_title: string;
}
