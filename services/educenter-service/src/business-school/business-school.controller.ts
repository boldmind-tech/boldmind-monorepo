import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { BusinessSchoolService } from './business-school.service';

@ApiTags('Business School')
@Controller('business-school')
export class BusinessSchoolController {
  constructor(private readonly businessSchoolService: BusinessSchoolService) {}

  @Get('courses')
  @ApiOperation({ summary: 'Get all business courses' })
  @ApiResponse({ status: 200, description: 'Returns list of courses' })
  async getCourses(@Query() filters: any) {
    return this.businessSchoolService.getCourses(filters);
  }

  @Get('courses/:id')
  @ApiOperation({ summary: 'Get course by ID' })
  @ApiResponse({ status: 200, description: 'Returns course details' })
  async getCourse(@Param('id') id: string) {
    return this.businessSchoolService.getCourse(id);
  }

  @Post('enroll')
  @ApiOperation({ summary: 'Enroll user in a course' })
  @ApiResponse({ status: 201, description: 'Enrollment successful' })
  async enrollCourse(@Body() data: { uid: string; courseId: string }) {
    return this.businessSchoolService.enrollCourse(data.uid, data.courseId);
  }
}