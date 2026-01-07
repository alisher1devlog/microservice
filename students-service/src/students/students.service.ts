import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentsService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateStudentDto) {
    return this.prisma.student.create({ data });
  }

  findAll() {
    return this.prisma.student.findMany();
  }

  update(id: number, data: UpdateStudentDto) {
    return this.prisma.student.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.student.delete({ where: { id } });
  }
}
