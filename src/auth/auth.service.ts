import { Injectable, NotFoundException } from '@nestjs/common';
import { IAuthenticate, Role } from './interface/Role';
import { faker } from '@faker-js/faker';
import { AuthenticateDto } from './dto/authenticate.tdo';
import { sign } from 'jsonwebtoken';

@Injectable()
export class AuthService {
  users = [
    {
      id: faker.datatype.uuid(),
      userName: 'redkas',
      password: 'red123',
      role: Role.Admin,
    },
    {
      id: faker.datatype.uuid(),
      userName: 'karim',
      password: 'karim',
      role: Role.User,
    },
  ];

  authenticate(AuthenticateDto: AuthenticateDto): IAuthenticate {
    const user = this.users.find(
      (u) =>
        u.userName === AuthenticateDto.userName &&
        u.password === AuthenticateDto.password,
    );
    if (!user) throw new NotFoundException('Invalid credentials');

    const token = sign({ ...user }, 'secrete');
    return { token, user };
  }
}
