import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

import * as dotenv from "dotenv";
dotenv.config({ path: ".env.dev" });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api");
  app.enableCors();
  await app.listen(3001);
}
bootstrap();
