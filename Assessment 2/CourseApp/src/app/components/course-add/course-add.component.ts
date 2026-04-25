import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Course } from '../../models/course';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './course-add.component.html'
})
export class CourseAddComponent {
  @Output() courseAdded = new EventEmitter<Course>();
  
  newCourse: Course = {
    title: '',
    instructor: '',
    duration: 0
  };

  constructor(private courseService: CourseService) {}

  onSubmit(): void {
    if (!this.newCourse.title || !this.newCourse.instructor || this.newCourse.duration <= 0) return;

    this.courseService.addCourse(this.newCourse).subscribe({
      next: (course) => {
        this.courseAdded.emit(course);
        this.newCourse = { title: '', instructor: '', duration: 0 };
      },
      error: (err) => console.error('Error adding course', err)
    });
  }
}
