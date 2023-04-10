import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { ReviewEntity } from "./models/review.entity";
import { ReviewDTO } from "./models/review.dto";

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(ReviewEntity)
    private readonly reviewRepository: Repository<ReviewEntity>
  ) {}

  createReview(review: ReviewDTO): Promise<ReviewEntity> {
    return this.reviewRepository.save(review);
  }

  findAllReviews(): Promise<ReviewEntity[]> {
    return this.reviewRepository.find();
  }

  //TODO: INSERT PAGINATION
  findReviewsByUserIdPaginated(userId: string): Promise<ReviewEntity[]> {
    return this.reviewRepository.find({ user_id: userId });
  }

  findReviewById(id: number): Promise<ReviewEntity> {
    return this.reviewRepository.findOne(id);
  }

  async updateReview(
    id: number,
    reviewToUpdate: ReviewDTO
  ): Promise<ReviewEntity> {
    const review = this.findReviewById(id);

    if (review) {
      throw new BadRequestException("Review not found for update.");
    }

    return this.reviewRepository.save(reviewToUpdate);
  }

  deleteReview(id: number): Promise<DeleteResult> {
    return this.reviewRepository.delete(id);
  }
}
