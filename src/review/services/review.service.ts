import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ReviewEntity } from '../models/review.entity';
import { ReviewModel } from '../models/review.interface';

@Injectable()
export class ReviewService {
    constructor(
        @InjectRepository(ReviewEntity)
        private readonly reviewRepository: Repository<ReviewEntity>
    ){}

    createPost(review: ReviewModel): Observable<ReviewModel>{
        return from(this.reviewRepository.save(review));
    }

    findAllReviews(): Observable<ReviewModel[]>{
        return from(this.reviewRepository.find());
    }

    findReviewById(id: number): Observable<ReviewModel>{
        return from(this.reviewRepository.findOne(id));
    }

    updateReview(id: number, review: ReviewModel): Observable<UpdateResult>{
        return from(this.reviewRepository.update(id, review));
    }

    deleteReview(id: number): Observable<DeleteResult>{
        return from(this.reviewRepository.delete(id));
    }
}
