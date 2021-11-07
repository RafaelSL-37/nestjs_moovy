import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewController } from './controllers/review.controller';
import { ReviewEntity } from './models/review.entity';
import { ReviewService } from './services/review.service';

@Module({
  imports: [TypeOrmModule.forFeature([ReviewEntity])],
  providers: [ReviewService],
  controllers: [ReviewController],
  exports: [TypeOrmModule.forFeature([ReviewEntity])]
})
export class ReviewModule {}
