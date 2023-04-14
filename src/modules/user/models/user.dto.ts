import { BaseDTO } from "src/core/base.dto";
import { ReviewDTO } from "src/modules/review/models/review.dto";

export interface UserDTO extends BaseDTO {
  email: string;

  password: string;

  name: string;

  date_of_birth: Date;

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

export interface AuthUserBO {
  id: string;

  name: string;
}
