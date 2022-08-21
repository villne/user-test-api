import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
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
