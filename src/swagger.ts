// import { Logger, INestApplication } from "@nestjs/common";

//TODO: IMPLEMENT SWAGGER

// export function setupSwagger(
//   app: INestApplication,
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   isServerless = false
// ): void {
//   const logger: Logger = new Logger("Swagger");
//   const swaggerEndpoint = "/api-docs";

//   const options = new DocumentBuilder()
//     .setTitle("Moovy API")
//     .setDescription("Moovy API documentation")
//     .setVersion("0.0.1")
//     .addBearerAuth()
//     .build();

//   const document = SwaggerModule.createDocument(app, options);
//   SwaggerModule.setup(swaggerEndpoint, app, document, {
//     customSiteTitle: "Moovy API",
//     swaggerOptions: {
//       filter: true,
//       displayRequestDuration: true,
//       withCredentials: true,
//       defaultModelsExpandDepth: 1,
//       defaultModelExpandDepth: 10,
//       defaultModelRendering: "model",
//     },
//   });

//   logger.log(`Added swagger on endpoint ${swaggerEndpoint}`);
// }
