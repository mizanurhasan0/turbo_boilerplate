import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginInput } from './dto/LoginInput';
import { verify } from 'argon2';
import { JwtPayload } from './type/jwt_payload';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { CreateAuthInput } from './dto/create-auth.input';

@Injectable()
export class AuthService {

  constructor(private readonly prisma: PrismaService, private jwtService: JwtService) { }

  async validateLocalUser({ email, password }: LoginInput) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) throw new UnauthorizedException("User not found!");
    const checkkPassword = await verify(user.password!, password);
    if (!checkkPassword) throw new UnauthorizedException("Password not match!");
    return user;
  }

  async generateToken(id: number) {
    const payload: JwtPayload = { sub: id };

    const accessToken = await this.jwtService.signAsync(payload);
    return { accessToken };
  }

  async login(user: User) {
    const { accessToken } = await this.generateToken(user.id);
    return {
      id: user.id,
      email: user.email,
      avatar: user?.avatar,
      accessToken
    }
  }

  async validateJwtToken(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id } })

    if (!user) throw new UnauthorizedException('User not found!');
    const curUsr = { id: user.id, role: user.role };
    return curUsr;
  }

  async validateGoogleUser(user: CreateAuthInput) {
    const usr = await this.prisma.user.findUnique({ where: { email: user.email } });
    if (usr) {
      const { password, ...newUser } = usr;
      return newUser;
    }
    const createUser = await this.prisma.user.create({ data: { ...user, role: 'user' } });
    const { password, ...authUser } = createUser;

    return authUser;
  }
}
