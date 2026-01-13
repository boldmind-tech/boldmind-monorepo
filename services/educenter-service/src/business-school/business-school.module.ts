import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BusinessSchoolController } from './business-school.controller';
import { BusinessSchoolService } from './business-school.service';
import { Course, CourseSchema } from '../courses/schemas/course.schema';
import { Enrollment, EnrollmentSchema } from './schemas/enrollment.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Course.name, schema: CourseSchema },
      { name: Enrollment.name, schema: EnrollmentSchema },
    ]),
  ],
  controllers: [BusinessSchoolController],
  providers: [BusinessSchoolService],
  exports: [BusinessSchoolService],
})
export class BusinessSchoolModule {}