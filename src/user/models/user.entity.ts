import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { ReviewEntity } from "src/review/models/review.entity";
import { ReviewDTO } from "src/review/models/review.dto";

@Entity("user")
export class UserEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  date_of_birth: Date;

  @Column()
  gender: string;

  @OneToMany((type) => ReviewEntity, (review) => review.user_id)
  @JoinColumn([{ name: "reviews_id", referencedColumnName: "user_id" }])
  reviews: ReviewDTO[];
}
