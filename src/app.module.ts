import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ClerkClientProvider } from './providers/clerk-client.provider';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { ClerkAuthGuard } from './auth/clerk-auth.guard';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService, ClerkClientProvider, { provide: APP_GUARD, useValue: ClerkAuthGuard}],
})
export class AppModule {}
