import { IsInt, IsString } from 'class-validator';

export class CreateItemDto {
  @IsString()
  name: string;

  @IsString()
  image: string;

  @IsString()
  category: string;

  @IsString()
  float: string;

  @IsInt()
  price: number;
}
