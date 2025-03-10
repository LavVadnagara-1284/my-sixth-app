import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { CONSTANTS } from './constants';
import { RoleGuard } from './role.guard';

@Controller('app')
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @UseGuards(AuthGuard('local'))
  login(@Request() req): string {
    return this.authService.generateToken(req.user);
  }

  @Get('/iosDeveloper')
  @UseGuards(AuthGuard('jwt'), new RoleGuard(CONSTANTS.ROLES.IOS_DEVELOPER))
  iosDeveloperData(@Request() req): string {
    return 'This is private data for IOS Developer' + JSON.stringify(req.user);
  }

  @Get('/androidDeveloper')
  @UseGuards(AuthGuard('jwt'), new RoleGuard(CONSTANTS.ROLES.ANDROID_DEVELOPER))
  androidDeveloperData(@Request() req): string {
    return (
      'This is private data for Android Developer' + JSON.stringify(req.user)
    );
  }
}
