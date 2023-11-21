import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CafeService } from './cafe.service';

@Controller('cafe')
export class CafeController {
  constructor(private readonly cafeService: CafeService) {}

  @Get()
  findAll() {
    return this.cafeService.findAll();
  }
  @Get()
  findOne(@Param('id') id: string) {
    return this.cafeService.findOne();
  }

  @Post()
  create(@Body('name') body) {
    return this.cafeService.create(body);
  }

  @Post()
  create(@Body('name') body) {
    return body;
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }
}
