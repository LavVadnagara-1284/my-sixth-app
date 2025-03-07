import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/user.entity';

@Injectable()
export class AuthService {
  constructor(private readonly jwtSerive: JwtService) {}
  generateToken(payload: User): string {
    return this.jwtSerive.sign(payload);
  }
}
