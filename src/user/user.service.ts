import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.servce';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async create(user: Prisma.UserCreateInput) {
    return await this.prisma.user.create({ data: user });
  }
}
