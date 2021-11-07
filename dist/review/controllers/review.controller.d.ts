import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { ReviewModel } from '../models/review.interface';
import { ReviewService } from '../services/review.service';
export declare class ReviewController {
    private reviewService;
    constructor(reviewService: ReviewService);
    findAll(): Observable<ReviewModel[]>;
    findById(id: number): Observable<ReviewModel>;
    create(review: ReviewModel): Observable<ReviewModel>;
    update(id: number, review: ReviewModel): Observable<UpdateResult>;
    delete(id: number): Observable<DeleteResult>;
}
