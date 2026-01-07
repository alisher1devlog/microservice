import { IsString, IsInt, Min, IsEmail } from 'class-validator';

export class CreateStudentDto {
  @IsString({ message: "Ism matn ko'rinishida bo'lishi shart" })
  fullName: string;

  @IsInt({ message: "Yosh butun son bo'lishi kerak" })
  @Min(1, { message: "Yosh 1 dan kichik bo'lmasligi kerak" })
  grade: number;

  @IsEmail({}, { message: "Noto'g'ri email formati" })
  email: string;
}
