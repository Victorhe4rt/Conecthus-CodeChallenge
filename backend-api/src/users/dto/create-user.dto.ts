import { IsEmail, IsString, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {

  @ApiProperty({
    description: 'Nome do usuário',
    example: 'João'
  })
  @IsString()
  @Matches(/^[A-Za-z]+$/, { message: 'Nome deve conter apenas letras.' })
  nome: string;

  @ApiProperty({
    description: 'Email do usuário',
    example: 'joao@example.com'
  })
  @IsEmail({}, { message: 'Email deve ser válido.' })
  email: string;

  @ApiProperty({
    description: 'Matrícula do usuário',
    example: '123456'
  })
  @IsString()
  @Matches(/^\d+$/, { message: 'Matrícula deve conter apenas números.' })
  matricula: string;

  @ApiProperty({
    description: 'Senha do usuário',
    example: 'senha123'
  })
  @IsString()
  senha: string;
}
