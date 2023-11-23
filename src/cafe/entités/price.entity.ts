import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Cafe } from './cafe.entité';

@Entity()
export class Price {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany((type) => Cafe, (cafe) => cafe.prices)
  cafe: Cafe[];
}
