import { Injectable, NotFoundException } from '@nestjs/common';
import { Cafe } from './entités/cafe.entité';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDto } from './dto/create.dto/create.dto';
import { UpdateDto } from './dto/update.dto/update.dto';
import { Price } from './entités/price.entity';

@Injectable()
export class CafeService {
  constructor(
    @InjectRepository(Cafe)
    private readonly cafeRepository: Repository<Cafe>,
    @InjectRepository(Price)
    private readonly priceRepository: Repository<Price>,
  ) {}

  async findAll(): Promise<Cafe[]> {
    return this.cafeRepository.find({
      relations: ['prices'],
    });
  }

  async findOne(id: number) {
    const cafe = this.cafeRepository.findOne({
      where: { id },
    });
    if (!cafe) {
      // throw new HttpException(`This id: ${id} not found`, HttpStatus.NOT_FOUND);
      throw new NotFoundException(`This id: ${id} not found`);
      throw 'Server Error';
    }
    return cafe;
  }

  async create(createDto: CreateDto) {
    const prices = await Promise.all(
      createDto.prices.map((x) => this.preloadPriceByName(x)),
    );

    const cafe = this.cafeRepository.create({
      ...createDto,
      prices,
    });
    return this.cafeRepository.save(cafe);
  }

  async update(id: string, updateDto: UpdateDto) {
    const prices =
      updateDto.prices &&
      (await Promise.all(
        updateDto.prices.map((x) => this.preloadPriceByName(x)),
      ));
    const updateCafe = await this.cafeRepository.preload({
      id: +id,
      ...updateDto,
      prices,
    });
    if (!updateCafe) {
      throw new NotFoundException(`This Cafe : ${id} not found`);
    }
    return this.cafeRepository.save(updateCafe);
  }

  async remove(id: string) {
    await this.cafeRepository.delete(id);
  }

  private async preloadPriceByName(name: string): Promise<Price> {
    const price = await this.priceRepository.findOne({
      where: { name },
    });
    if (price) {
      return price;
    }
    return this.priceRepository.create({ name });
  }
}
