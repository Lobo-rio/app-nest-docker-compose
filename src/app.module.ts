import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './domain/courses/Courses.module';
import { TeachersModule } from './domain/teachers/Teachers.module';
import { StudentsModule } from './domain/students/Students.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'db',
    port: 5432,
    username: 'postgres',
    password: 'admin@',
    database: 'appnestjs',
    entities: [__dirname + '/**/*.entity.js'],
    autoLoadEntities: false,
    synchronize: false,
  }),
    CoursesModule,
    TeachersModule,
    StudentsModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
