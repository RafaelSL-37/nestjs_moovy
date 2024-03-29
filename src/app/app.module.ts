import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import * as typeOrmConfig from "../database/typeorm.config";
import { AuthModule } from "../modules/auth/auth.module";
import { ReviewModule } from "../modules/review/review.module";
import { UserModule } from "../modules/user/user.module";
import { APP_GUARD } from "@nestjs/core";
import { AuthGuard } from "src/modules/auth/guard/auth.guard";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(typeOrmConfig),
    ReviewModule,
    UserModule,
    AuthModule,
    JwtModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
