import { Component } from '@angular/core';
import { CourseService } from '../services/course.service';
import { Course } from '../models/course.model';

@Component ({
  selector: 'app-course-list',
  templateUrl: './course-list.html',
})
export class CourseListComponent {
  
  constructor(public courseService: CourseService) {}

  get courses(): Course[] {
    return this.courseService.getCourses();
  }

  toggle(id: number) {
    this.courseService.toggleCourseStatus(id);
  }

  delete(id: number) {
    this.courseService.deleteCourse(id);
  }
}