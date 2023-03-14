import { Module } from "@nestjs/common";
import { UserModule } from "src/modules/user/user.module";

@Module({
  imports: [UserModule],
  providers: [],
  controllers: [],
  exports: [],
})
export class AuthModule {}
