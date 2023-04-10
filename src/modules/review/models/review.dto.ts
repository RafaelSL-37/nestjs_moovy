import { BaseDTO } from "src/core/base.dto";
import { UserDTO } from "src/modules/user/models/user.dto";

export interface ReviewDTO extends BaseDTO {
  movie_id: string;

  review_file_path?: string;

  user_id: string;

  score: number;

  user?: UserDTO;
}
