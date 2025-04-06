import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { JwtStrategy } from './strategies.ts/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';
import { GoogleStragey } from './strategies.ts/google.stragegy';
import { GoogleAuthController } from './google.auth.controller';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        secret: config.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: config.get<string>('JWT_EXPIRE')
        }
      })
    })
  ],
  providers: [AuthResolver, AuthService, JwtStrategy, PrismaService, GoogleStragey],
  controllers: [GoogleAuthController]
})
export class AuthModule { }
