import { Module } from '@nestjs/common';
import { CafeController } from './cafe.controller';
import { CafeService } from './cafe.service';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { Cafe } from './entités/cafe.entité';
import { Price } from './entités/price.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cafe, Price])],
  controllers: [CafeController],
  providers: [CafeService],
})
export class CafeModule {}
