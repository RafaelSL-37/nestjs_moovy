import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { ReviewModel } from '../models/review.interface';
import { ReviewService } from '../services/review.service';

@Controller('review')
export class ReviewController {

    constructor(private reviewService: ReviewService){}

    @Get()
    findAll(): Observable<ReviewModel[]>{
        return this.reviewService.findAllReviews();
    }

    @Get(':id')
    findById(@Param('id') id:number): Observable<ReviewModel>{
        return this.reviewService.findReviewById(id);
    }

    @Post()
    create(@Body() review: ReviewModel): Observable<ReviewModel>{
        return this.reviewService.createPost(review);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() review: ReviewModel): Observable<UpdateResult>{
        return this.reviewService.updateReview(id, review);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Observable<DeleteResult>{
        return this.reviewService.deleteReview(id);
    }
}
