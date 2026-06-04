import { IsString, IsNotEmpty, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEstudianteDto {
  @ApiProperty({
    example: 'García',
    description: 'Apellido del estudiante',
    maxLength: 100,
  })
  @IsString()
  @IsNotEmpty({ message: 'El apellido es obligatorio' })
  @MaxLength(100, { message: 'El apellido no puede superar los 100 caracteres' })
  apellido!: string;

  @ApiProperty({
    example: 'Camila',
    description: 'Nombre del estudiante',
    maxLength: 100,
  })
  @IsString()
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @MaxLength(100, { message: 'El nombre no puede superar los 100 caracteres' })
  nombre!: string;

  @ApiProperty({
    example: 'STU12345',
    description: 'Código único del estudiante',
    maxLength: 50,
  })
  @IsString()
  @IsNotEmpty({ message: 'El código es obligatorio' })
  @MaxLength(50, { message: 'El código no puede superar los 50 caracteres' })
  codigo!: string;
}
