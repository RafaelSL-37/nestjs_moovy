import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { DeleteResult, UpdateResult } from "typeorm";
import { ReviewDTO } from "./models/review.dto";
import { ReviewService } from "./review.service";

@Controller("review")
export class ReviewController {
  constructor(private reviewService: ReviewService) {}

  @Get()
  findAll(): Promise<ReviewDTO[]> {
    return this.reviewService.findAllReviews();
  }

  @Get(":id")
  findById(@Param("id") id: number): Promise<ReviewDTO> {
    return this.reviewService.findReviewById(id);
  }

  @Post()
  create(@Body() review: ReviewDTO): Promise<ReviewDTO> {
    return this.reviewService.createReview(review);
  }

  @Put(":id")
  update(
    @Param("id") id: number,
    @Body() review: ReviewDTO
  ): Promise<ReviewDTO> {
    return this.reviewService.updateReview(id, review);
  }

  @Delete(":id")
  delete(@Param("id") id: number): Promise<DeleteResult> {
    return this.reviewService.deleteReview(id);
  }
}
