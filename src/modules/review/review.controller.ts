import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from "@nestjs/common";
import { ReviewMapper } from "./mapper/review.mapper";
import { ReviewDTO } from "./models/review.dto";
import { ReviewService } from "./review.service";

@Controller("review")
export class ReviewController {
  constructor(private reviewService: ReviewService) {}

  @Get()
  async findAll(): Promise<ReviewDTO[]> {
    const reviews = await this.reviewService.findAllReviews();

    return reviews.map(ReviewMapper.fromEntityToDTO);
  }

  @Get("user/:id")
  async findAllByUserIdPaginated(): Promise<ReviewDTO[]> {
    const reviews = [];

    return reviews.map(ReviewMapper.fromEntityToDTO);
  }

  @Get(":id")
  async findById(@Param("id", ParseUUIDPipe) id: number): Promise<ReviewDTO> {
    const review = await this.reviewService.findReviewById(id);

    return ReviewMapper.fromEntityToDTO(review);
  }

  @Post()
  async create(@Body() review: ReviewDTO): Promise<ReviewDTO> {
    const createdReview = await this.reviewService.createReview(review);

    return ReviewMapper.fromEntityToDTO(createdReview);
  }

  @Put(":id")
  async update(
    @Param("id", ParseUUIDPipe) id: number,
    @Body() review: ReviewDTO
  ): Promise<ReviewDTO> {
    const updatedReview = await this.reviewService.updateReview(id, review);

    return ReviewMapper.fromEntityToDTO(updatedReview);
  }

  @Delete(":id")
  delete(@Param("id") id: number): void {
    this.reviewService.deleteReview(id);
  }
}
