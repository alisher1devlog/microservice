import { IsString, IsNotEmpty } from 'class-validator';

export class CreateTeacherDto {
  @IsString()
  @IsNotEmpty({ message: 'Ism kiritilishi shart' })
  firstName: string;

  @IsString()
  @IsNotEmpty({ message: 'Familiya kiritilishi shart' })
  lastName: string;

  @IsString()
  @IsNotEmpty({ message: 'Fan nomi kiritilishi shart' })
  subject: string;
}
