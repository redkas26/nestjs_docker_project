/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from 'class-validator';
import { Role } from '../interface/Role';

export class profileDto {
  @IsNotEmpty()
  @IsString()
  readonly userName: string;

  @IsNotEmpty()
  @IsString()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @IsNotEmpty()
  @IsString()
  readonly userUUID: string;

  @IsNotEmpty()
  @IsString()
  readonly role: Role;
}
