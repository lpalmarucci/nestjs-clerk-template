import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './decorators/public.decorator';
import { ClerkAuthGuard } from './auth/clerk-auth.guard';
import { User } from './decorators/user.decorator';
import { type User as UserClerk } from '@clerk/backend';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(ClerkAuthGuard)
  @Get('/me')
  getProtectedHello(@User() user: UserClerk): UserClerk {
    return user;
  }
}
