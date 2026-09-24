import { IsString, IsNotEmpty, IsOptional, IsBoolean, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsUrl()
  coverImage?: string;

  @ApiProperty({ default: false })
  @IsOptional()
  @IsBoolean()
  published?: boolean;
}