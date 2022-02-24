import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateStudents1645644533590 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'students',
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
                    name: 'age',
                    type: 'timestamp',
                },
                {
                    name: 'series',
                    type: 'integer',
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
        await queryRunner.dropTable('students');
    }

}
