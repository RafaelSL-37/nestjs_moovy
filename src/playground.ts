import { NestFactory } from "@nestjs/core";
import { AppModule } from "src/app/app.module";
import * as dotenv from "dotenv";
import { ReviewService } from "./modules/review/review.service";

dotenv.config({ path: ".env.dev" });

async function run(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  await app.init();

  const service = app.get(ReviewService); //EXAMPLE
}
run().catch(console.error);
