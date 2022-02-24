import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateCoursesStudents1645710945270 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'courses_students',
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
                    name: 'studentsId',
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
            'courses_students',
            new TableForeignKey({
                name: 'courses_students_courses',
                columnNames: [ 'coursesId' ],
                referencedColumnNames: [ 'id' ],
                referencedTableName: 'courses',
            })
        );

        await queryRunner.createForeignKey(
            'courses_students',
            new TableForeignKey({
                name: 'students_courses_students',
                columnNames: [ 'studentsId' ],
                referencedColumnNames: [ 'id' ],
                referencedTableName: 'students',
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('courses_students','students_courses_students');
        await queryRunner.dropForeignKey('courses_students','courses_students_courses');
        await queryRunner.dropTable('courses_students');
    }

}
