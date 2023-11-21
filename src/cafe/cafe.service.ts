import { Injectable } from '@nestjs/common';
import { Cafe } from './entités/cafe.entité';

@Injectable()
export class CafeService {
  findAll() {
    throw new Error('Method not implemented.');
  }
  findOne() {
    throw new Error('Method not implemented.');
  }
  create(body: any) {
    throw new Error('Method not implemented.');
  }
  private cafe: Cafe[] = [
    {
      id: 1,
      name: 'Redhwane',
      age: 34,
      address: ['paris', 'France'],
    },
    {
      id: 1,
      name: 'Karim',
      age: 36,
      address: ['ALger', 'Algerie'],
    },
  ];
};

async findAll() {
    return this.cafe
}

async findOne( id: string) {
    return this.cafe.find(x => x.id === +id);
};

async create( createCafeDto: any ) {
    this.cafe.push(createCafeDto)
};

async update(id: string,updateCafeDto: any ) {
    const updateStudent = this.findOne(id);
    if (updateStudent) {
        //
    }
}

remove( id: string ) {
    const removeCafe = this.cafe.findIndex(x => x.id === +id)
};

function findAll() {
    throw new Error('Function not implemented.');
}
function findOne(id: any, string: any) {
    throw new Error('Function not implemented.');
}

function create(createCafeDto: any, any: any) {
    throw new Error('Function not implemented.');
}

function update(id: any, string: any, updateCafeDto: any, any: any) {
    throw new Error('Function not implemented.');
}

function remove(id: any, string: any) {
    throw new Error('Function not implemented.');
}

