import { GetUser } from './../auth/decorator/';
import {
  Controller,
  Get,
  Patch,
  Req,
  UseGuards,
} from '@nestjs/common';

import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { JwtGurad } from '../auth/guard';
import { User } from '@prisma/client';

@UseGuards(JwtGurad)
@Controller('users')
export class UserController {
  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }
  @Patch()
  editUser() {}
}
