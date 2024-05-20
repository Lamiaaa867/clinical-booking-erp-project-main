import { Module } from '@nestjs/common';
import { authController } from './auth.controller';
import { authService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';
import { NotificationsModule } from '../notifications/notifications.module';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
    }),
    NotificationsModule
  ],
  controllers: [authController],
  providers: [authService],
})
export class authModule {}