import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';
import { CafeService } from './cafe.service';
import { CreateDto } from './dto/create.dto/create.dto';
import { UpdateDto } from './dto/update.dto/update.dto';

@Controller('cafe')
export class CafeController {
  constructor(private readonly cafeService: CafeService) {}

  @Get()
  findAll() {
    return this.cafeService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cafeService.findOne(id);
  }

  @Post()
  create(@Body() createCafeDTO: CreateDto) {
    return this.cafeService.create(createCafeDTO);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateCafeDTO: UpdateDto) {
    return this.cafeService.update(id, UpdateCafeDTO);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cafeService.remove(id);
  }
}
