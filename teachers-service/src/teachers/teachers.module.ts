import { Module } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { TeachersController } from './teachers.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [TeachersController],

  providers: [TeachersService, PrismaService],

  exports: [TeachersService],
})
export class TeachersModule {}
