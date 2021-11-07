import { ReviewModel } from "src/review/models/review.interface";

export interface UserModel{
    id?: number;
    email: string;
    password: string;
    name: string;
    date_of_birth: Date;
    account_creation_date: Date;
    gender: string;
    auth_token: string;
    reviews: ReviewModel[];
}