import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { CONSTANTS } from 'src/constants';

@Injectable()
export class UserService {
  public users: User[] = [
    {
      username: 'User1',
      password: 'password1',
      email: 'u1@test.com',
      age: 30,
      bio: 'This is the test bio for the user One (1)',
      role: CONSTANTS.ROLES.IOS_DEVELOPER,
    },
    {
      username: 'User2',
      password: 'password2',
      email: 'u2@test.com',
      age: 25,
      bio: 'This is the test bio for the user Two (2)',
      role: CONSTANTS.ROLES.ANDROID_DEVELOPER,
    },
    {
      username: 'User3',
      password: 'password3',
      email: 'u3@test.com',
      age: 35,
      bio: 'This is the test bio for the user Three (3)',
      role: CONSTANTS.ROLES.IOS_DEVELOPER,
    },
  ];

  getUserByUserName(userName: string): User | undefined {
    return this.users.find((user) => user.username === userName);
  }
}
