import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateTeachersMatters1645708274469 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'teachers_matters',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'teachersId',
                    type: 'uuid',
                },
                {
                    name: 'mattersId',
                    type: 'uuid',
                },
                {
                    name: 'createdAt',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
            ]
        }));

        await queryRunner.createForeignKey(
            'teachers_matters', 
            new TableForeignKey({
                name: 'teachers_matters_teachers',
                columnNames: [ 'teachersId' ],
                referencedColumnNames: [ 'id' ],
                referencedTableName: 'teachers'
            })
        )

        await queryRunner.createForeignKey(
            'teachers_matters', 
            new TableForeignKey({
                name: 'matters_teachers_matters',
                columnNames: [ 'mattersId' ],
                referencedColumnNames: [ 'id' ],
                referencedTableName: 'matters'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('teachers_matters','matters_teachers_matters');
        await queryRunner.dropForeignKey('teachers_matters','teachers_matters_teachers');
        await queryRunner.dropTable('teachers_matters');
    }

}
