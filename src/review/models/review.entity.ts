import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "src/user/models/user.entity";

@Entity('review')
export class ReviewEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    m_id: number;

    @Column({ default: null })
    rev_file_path?: string;

    @ManyToOne(() => UserEntity, (user) => user.reviews)
    @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
    user_id: UserEntity;
}