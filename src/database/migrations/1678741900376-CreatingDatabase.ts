import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatingDatabase1678741900376 implements MigrationInterface {
  name = "CreatingDatabase1678741900376";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "user" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "deleted_at" TIMESTAMP,
                "email" character varying NOT NULL,
                "password" character varying NOT NULL,
                "name" character varying NOT NULL,
                "date_of_birth" TIMESTAMP NOT NULL,
                CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "review" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "deleted_at" TIMESTAMP,
                "movie_id" integer NOT NULL,
                "review_file_path" character varying,
                "user_id" uuid,
                CONSTRAINT "PK_2e4299a343a81574217255c00ca" PRIMARY KEY ("id")
            )
        `);
    await queryRunner.query(`
            ALTER TABLE "review"
            ADD CONSTRAINT "FK_81446f2ee100305f42645d4d6c2" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "review" DROP CONSTRAINT "FK_81446f2ee100305f42645d4d6c2"
        `);
    await queryRunner.query(`
            DROP TABLE "review"
        `);
    await queryRunner.query(`
            DROP TABLE "user"
        `);
  }
}
