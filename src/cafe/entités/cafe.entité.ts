/* eslint-disable prettier/prettier */
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Price } from './price.entity';

@Entity()
export class Cafe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column('json', { nullable: true })
  address: string[];

  @JoinTable()
  @ManyToMany((type) => Price, (price) => price.cafe, { cascade: true })
  prices: Price[];
}
