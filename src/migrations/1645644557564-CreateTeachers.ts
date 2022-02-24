import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTeachers1645644557564 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'teachers',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'email',
                    type: 'varchar'
                },
                {
                    name: 'cel',
                    type: 'varchar',
                },
                {
                    name: 'createdAt',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
                {
                    name: 'updatedAt',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('teachers');
    }

}
