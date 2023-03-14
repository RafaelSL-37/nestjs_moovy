import { Column, Entity, JoinColumn, OneToMany } from "typeorm";
import { ReviewEntity } from "src/modules/review/models/review.entity";
import { ReviewDTO } from "src/modules/review/models/review.dto";
import { BaseEntity } from "src/core/base.entity";

@Entity("user")
export class UserEntity extends BaseEntity {
  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  date_of_birth: Date;

  @OneToMany((type) => ReviewEntity, (review) => review.user)
  @JoinColumn([{ name: "reviews_id", referencedColumnName: "user_id" }])
  reviews: ReviewDTO[];
}
