import { ReviewDTO } from "src/review/models/review.dto";

export interface UserDTO {
  id: string;

  created_at: Date;

  updated_at: Date;

  deleted_at: Date;

  email: string;

  password: string;

  name: string;

  date_of_birth: Date;

  gender: string;

  reviews: ReviewDTO[];
}

export interface ShortUserDTO {
  id: string;

  created_at: Date;

  updated_at: Date;

  name: string;

  email: string;

  password: string;

  date_of_birth: Date;
}

export interface AuthUserDTO {
  id: string;

  name: string;
}
