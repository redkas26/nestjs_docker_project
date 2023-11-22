import { Injectable } from '@nestjs/common';
import { Cafe } from './entités/cafe.entité';

@Injectable()
export class CafeService {
  private cafe: Cafe[] = [
    {
      id: 1,
      name: 'Redhwane',
      age: 34,
      address: ['paris', 'France'],
    },
    {
      id: 2,
      name: 'Karim',
      age: 36,
      address: ['ALger', 'Algerie'],
    },
    {
      id: 3,
      name: 'annes',
      age: 36,
      address: ['ALger', 'Algerie'],
    },
  ];

  async findAll() {
    return this.cafe;
  }

  async findOne(id: string) {
    const cafe = this.cafe.find((x) => x.id === +id);
    if (!cafe) {
      // throw new HttpException(`This id: ${id} not found`, HttpStatus.NOT_FOUND);
      // throw new NotFoundException(`This id: ${id} not found`);
      throw 'Server Error';
    }
    return cafe;
  }

  async create(createCafeDto: any) {
    this.cafe.push(createCafeDto);
  }

  async update(id: string, updateCafeDto: any) {
    const updateStudent = this.findOne(updateCafeDto);
    if (updateStudent) {
      //
    }
  }

  remove(id: string) {
    const removeCafe = this.cafe.findIndex((x) => x.id === +id);
    if (removeCafe >= 0) {
      return this.cafe.splice(removeCafe, 1);
    }
  }
}
