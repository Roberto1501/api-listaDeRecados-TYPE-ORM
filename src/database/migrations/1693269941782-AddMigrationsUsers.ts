import { MigrationInterface, QueryRunner } from "typeorm";

export class AddMigrationsUsers1693269941782 implements MigrationInterface {
    name = 'AddMigrationsUsers1693269941782'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "BancoTrabalhoFinal"."user" ("id" uuid NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "BancoTrabalhoFinal"."errand" ("id" uuid NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "type" character varying NOT NULL, "user" character varying NOT NULL, CONSTRAINT "PK_9f3c23786d9cb9bed972cf6a36c" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "BancoTrabalhoFinal"."errand"`);
        await queryRunner.query(`DROP TABLE "BancoTrabalhoFinal"."user"`);
    }

}
