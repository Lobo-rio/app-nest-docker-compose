import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMatters1645644508533 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'matters',
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
        await queryRunner.dropTable('matters');
    }

}
