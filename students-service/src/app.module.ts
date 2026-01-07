import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [StudentsModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
