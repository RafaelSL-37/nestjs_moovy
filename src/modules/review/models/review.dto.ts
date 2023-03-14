import { UserDTO } from "src/modules/user/models/user.dto";

export interface ReviewDTO {
  id: string;

  created_at: Date;

  updated_at: Date;

  deleted_at: Date;

  movie_id: number;

  review_file_path?: string;

  user: UserDTO;
}
