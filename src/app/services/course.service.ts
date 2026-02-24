import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
    providedIn: 'root'
})
export class CourseService {

    private courses: Course[] = [];
    private idCounter = 1;

    constructor() { }

    getCourses(): Course[] {
        return this.courses;
    }

    addCourse(course: Omit<Course, 'id'>): void {
        const newCourse: Course = {
            id: this.idCounter++,
            ...course
        };
        this.courses.push(newCourse);
    }

    toggleCourseStatus(id: number): void {
        const course = this.courses.find(c => c.id === id);
        if (course) {
            course.estado = !course.estado
        }
    }

    deleteCourse(id: number): void {
        this.courses = this.courses.filter(c => c.id !== id);
    }
}