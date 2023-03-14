import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ReviewModule } from "src/modules/review/review.module";
import { UserController } from "./user.controller";
import { UserEntity } from "./models/user.entity";
import { UserService } from "./user.service";

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), ReviewModule],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
