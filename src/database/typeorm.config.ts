//import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

let typeOrmConfig: TypeOrmModuleOptions = {
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: parseInt(<string>process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  autoLoadEntities: true,
  synchronize: false,
  entities: [`${__dirname}/../modules/**/models/*.entity.{js,ts}`],
  migrations: [`${__dirname}/../database/migrations/*{.ts,.js}`],
  keepConnectionAlive: true,
  migrationsRun: true,
  migrationsTableName: "migrations_typeorm",
  //namingStrategy: new SnakeNamingStrategy(),
};

module.exports = typeOrmConfig;
