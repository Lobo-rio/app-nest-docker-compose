import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MattersEntity } from '../matters/entities/Matters.entity';
import { TeachersEntity } from './entities/Teachers.entity';
import { TeachersController } from './Teachers.controller';
import { TeachersService } from './Teachers.service';

@Module({
  imports: [ TypeOrmModule.forFeature([ TeachersEntity, MattersEntity ])],
  controllers: [TeachersController],
  providers: [TeachersService]
})
export class TeachersModule {}
