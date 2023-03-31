import * as dotenv from "dotenv";
dotenv.config({ path: ".env.dev" });

import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app/app.module";
//import { setupSwagger } from "./swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix("api");
  app.enableCors();
  //setupSwagger(app);

  await app.listen(3001);
}
bootstrap();
