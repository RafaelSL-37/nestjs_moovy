import { BadRequestException } from "@nestjs/common";
import { ReviewDTO } from "../models/review.dto";
import { ReviewEntity } from "../models/review.entity";

export class ReviewMapper {
  static fromEntityToDTO(entity: ReviewEntity): ReviewDTO {
    const dto: ReviewDTO = {
      id: entity.id,
      created_at: entity.created_at,
      updated_at: entity.updated_at,
      deleted_at: entity.deleted_at,
      movie_id: entity.movie_id,
      review_file_path: entity.review_file_path,
      user_id: entity.user_id,
      user: entity.user,
    };

    return dto;
  }

  static fromDTOtoEntity(dto: ReviewDTO): ReviewEntity {
    if (!dto) {
      throw new BadRequestException("Invalid input DTO");
    }

    const entity = new ReviewEntity();

    const fields = Object.getOwnPropertyNames(dto);

    fields.forEach((field) => {
      entity[field] = dto[field];
    });

    return entity;
  }
}
