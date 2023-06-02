import { IsNumber } from 'class-validator';

class CommonPaginationDto {
  @IsNumber()
  limit: number;

  @IsNumber()
  skip: number;
}

export { CommonPaginationDto };
