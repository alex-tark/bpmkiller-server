import {MigrationInterface, QueryRunner} from "typeorm";

export class user1534947582823 implements MigrationInterface {

    public async up(
        queryRunner: QueryRunner
    ): Promise<any> {
        queryRunner.query(`
      CREATE INDEX index_user_meta ON "user" USING gin (meta jsonb_path_ops);
      `);
    }

    public async down(
        queryRunner: QueryRunner
    ): Promise<any> {
        queryRunner.query("DROP INDEX index_user_meta;");
    }

}
