import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ReviewEntity } from "src/review/models/review.entity";
import { ReviewModel } from "src/review/models/review.interface";

@Entity('user')
export class UserEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    name: string;

    @Column()
    date_of_birth: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    account_creation_date: Date;

    @Column()
    gender: string;

    @Column({ default: () => 'asdnflasndf' }) //hashing?
    auth_token: string;

    @OneToMany(type => ReviewEntity, (review) => review.user_id)
    @JoinColumn([{ name: "reviews_id", referencedColumnName: "user_id" }])
    reviews: ReviewModel[];
}