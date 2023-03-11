import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { ReviewEntity } from "../models/review.entity";
import { ReviewDTO } from "../models/review.dto";

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(ReviewEntity)
    private readonly reviewRepository: Repository<ReviewEntity>
  ) {}

  createReview(review: ReviewDTO): Promise<ReviewEntity> {
    return this.reviewRepository.save(review);
  }

  findAllReviews(): Promise<ReviewDTO[]> {
    return this.reviewRepository.find();
  }

  findReviewById(id: number): Promise<ReviewDTO> {
    return this.reviewRepository.findOne(id);
  }

  updateReview(review: ReviewDTO): Promise<ReviewDTO> {
    return this.reviewRepository.save(review);
  }

  deleteReview(id: number): Promise<DeleteResult> {
    return this.reviewRepository.delete(id);
  }
}
