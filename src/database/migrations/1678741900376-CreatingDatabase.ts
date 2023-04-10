import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatingDatabase1678741900376 implements MigrationInterface {
  name = "CreatingDatabase1678741900376";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "users" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "deleted_at" TIMESTAMP,
                "email" character varying NOT NULL,
                "password" character varying NOT NULL,
                "name" character varying NOT NULL,
                "date_of_birth" TIMESTAMP NOT NULL,
                CONSTRAINT "PK_users_id" PRIMARY KEY ("id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "reviews" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "deleted_at" TIMESTAMP,
                "movie_id" character varying NOT NULL,
                "score" numeric NOT NULL,
                "review_file_path" character varying,
                "user_id" uuid NOT NULL,
                CONSTRAINT "PK_reviews_id" PRIMARY KEY ("id")
            )
        `);
    await queryRunner.query(`
            ALTER TABLE "reviews"
            ADD CONSTRAINT "FK_reviews_user_id_references_users_id" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "reviews" DROP CONSTRAINT "FK_reviews_user_id_references_users_id"
        `);
    await queryRunner.query(`
            DROP TABLE "reviews"
        `);
    await queryRunner.query(`
            DROP TABLE "users"
        `);
  }
}
