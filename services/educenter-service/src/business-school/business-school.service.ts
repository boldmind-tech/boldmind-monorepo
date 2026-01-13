import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course, CourseDocument } from '../courses/schemas/course.schema';
import { Enrollment, EnrollmentDocument } from './schemas/enrollment.schema';

@Injectable()
export class BusinessSchoolService {
  constructor(
    @InjectModel(Course.name) private courseModel: Model<CourseDocument>,
    @InjectModel(Enrollment.name) private enrollmentModel: Model<EnrollmentDocument>,
  ) {}

  async getCourses(filters?: any) {
    const query: any = { category: 'business' };
    
    if (filters?.category) {
      query.subCategory = filters.category;
    }
    
    if (filters?.free !== undefined) {
      query.isFree = filters.free === 'true';
    }
    
    return this.courseModel.find(query).sort({ createdAt: -1 });
  }

  async getCourse(id: string) {
    const course = await this.courseModel.findById(id);
    if (!course) {
      throw new NotFoundException('Course not found');
    }

    const enrollments = await this.enrollmentModel.countDocuments({ courseId: id });
    const userEnrollments = await this.enrollmentModel.find({ courseId: id }).limit(5);

    return {
      ...course.toObject(),
      totalEnrollments: enrollments,
      recentEnrollments: userEnrollments.map(e => ({
        userId: e.userId,
        enrolledAt: e.enrolledAt,
      })),
    };
  }

  async enrollCourse(uid: string, courseId: string) {
    // Check if course exists
    const course = await this.courseModel.findById(courseId);
    if (!course) {
      throw new NotFoundException('Course not found');
    }

    // Check if already enrolled
    const existingEnrollment = await this.enrollmentModel.findOne({
      userId: uid,
      courseId,
    });

    if (existingEnrollment) {
      return {
        success: false,
        message: 'Already enrolled in this course',
      };
    }

    // Create enrollment
    const enrollment = new this.enrollmentModel({
      userId: uid,
      courseId,
      enrolledAt: new Date(),
      status: 'active',
    });

    await enrollment.save();

    return {
      success: true,
      message: `Successfully enrolled in ${course.title}`,
      enrollment,
    };
  }
}