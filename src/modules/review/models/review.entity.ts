import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { UserEntity } from "src/modules/user/models/user.entity";
import { BaseEntity } from "src/core/base.entity";

@Entity("reviews")
export class ReviewEntity extends BaseEntity {
  @Column()
  movie_id: string;

  @Column({ default: null })
  review_file_path?: string;

  @Column({ nullable: false })
  user_id: string;

  @ManyToOne(() => UserEntity, (user) => user.reviews)
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: UserEntity;
}
