import { IsEmail, IsString, Matches } from 'class-validator';
import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger'
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiPropertyOptional({
      description: 'Nome do usuário (opcional)',
      example: 'João',
    })
    nome?: string;
  
    @ApiPropertyOptional({
      description: 'Email do usuário (opcional)',
      example: 'joao@example.com',
    })
    email?: string;
  
    @ApiPropertyOptional({
      description: 'Matrícula do usuário (opcional)',
      example: '123456',
    })
    matricula?: string;
  
    @ApiPropertyOptional({
      description: 'Senha do usuário (opcional)',
      example: 'Senha@123',
    })
    senha?: string;
  }