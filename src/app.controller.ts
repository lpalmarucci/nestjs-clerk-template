import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './decorators/public.decorator';
import { ClerkAuthGuard } from './auth/clerk-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(ClerkAuthGuard)
  @Get('/protected')
  getProtectedHello(): string {
    return 'protected hello world';
  }
}
