export declare class StartCbtDto {
    examType: string;
    subject: string;
    year?: number;
    mode?: 'full' | 'practice' | 'quick';
}
export declare class StartFullMockDto {
    examType: string;
    subjects: string[];
    year?: number;
}
export declare class AnswerDto {
    alocId: string;
    selectedAnswer: string;
    subject?: string;
    timeTakenSecs?: number;
    isSkipped?: boolean;
}
export declare class SubmitSessionDto {
    answers: AnswerDto[];
    timeTakenSecs?: number;
}
export declare class SubmitAnswerDto {
    alocId: string;
    selectedAnswer: string;
    timeTakenSecs?: number;
}
export declare class GetQuestionsDto {
    examType: string;
    subject: string;
    year?: number;
    limit?: number;
}
export declare class AiTutorDto {
    question: string;
    subject: string;
    examType: string;
    context?: string;
}
export declare class StudyPlanDto {
    examType: string;
    subjects: string[];
    targetDate: string;
    studyHoursPerDay: number;
}
export declare class CreateCourseDto {
    title: string;
    description: string;
    category: string;
    examType?: string;
    subject?: string;
    thumbnailUrl?: string;
    videoUrl?: string;
    durationMins?: number;
    price?: number;
    instructorName?: string;
    tags?: string[];
    prerequisites?: string[];
}
export declare class UpdateCourseDto {
    title?: string;
    description?: string;
    thumbnailUrl?: string;
    price?: number;
    tags?: string[];
}
export declare class EnrollCourseDto {
    courseId: string;
}
export declare class UpdateProgressDto {
    completedLessons?: number;
    progressPercent?: number;
    lastLessonId?: string;
}
export declare class WeeklyGoalDto {
    goalDays: number;
}
