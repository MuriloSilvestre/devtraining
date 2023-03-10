import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './entities/dto/create-course.dto/create-course.dto';
import { UpdateCourseDto } from './entities/dto/update-course.dto/update-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(+id);
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body() CreateCourseDto: CreateCourseDto) {
    return this.coursesService.create(CreateCourseDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(id, UpdateCourseDto);
  }

  @Delete(':id')
  delite(@Param('id') id: string) {
    return this.coursesService.remove(+id);
  }
}
