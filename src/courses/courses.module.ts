import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { coursesProviders } from './courses.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [CoursesController],
  providers: [CoursesService, ...coursesProviders],
})
export class CoursesModule {}
