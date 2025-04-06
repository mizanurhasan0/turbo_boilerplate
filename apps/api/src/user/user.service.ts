import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import { hash } from 'argon2';


@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) { }

  async create(payload: CreateUserInput) {
    const { password, ...user } = payload;

    const hashGenerate = await hash(password);

    return await this.prisma.user.create({
      data: {
        password: hashGenerate,
        ...user,
        role: 'user'

      }
    })
  }

  findAll() {
    return this.prisma.user.findMany();
  }

}
