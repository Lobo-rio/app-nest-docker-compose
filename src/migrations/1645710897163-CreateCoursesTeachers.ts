import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateCoursesTeachers1645710897163 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'courses_teachers',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'coursesId',
                    type: 'uuid',
                },
                {
                    name: 'teachersId',
                    type: 'uuid',
                },
                {
                    name: 'createdAt',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
            ],
        }));

        await queryRunner.createForeignKey(
            'courses_teachers',
            new TableForeignKey({
                name: 'courses_teachers_courses',
                columnNames: [ 'coursesId' ],
                referencedColumnNames: [ 'id' ],
                referencedTableName: 'courses'
            }),
        );

        await queryRunner.createForeignKey(
            'courses_teachers',
            new TableForeignKey({
                name: 'teachers_courses_teachers',
                columnNames: [ 'teachersId' ],
                referencedColumnNames: [ 'id' ],
                referencedTableName: 'teachers'
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('courses_teachers','teachers_courses_teachers');
        await queryRunner.dropForeignKey('courses_teachers','courses_teachers_courses');
        await queryRunner.dropTable('courses_teachers');
    }

}
