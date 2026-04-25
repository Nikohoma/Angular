import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from './models/course';
import { CourseService } from './services/course.service';
import { CourseAddComponent } from './components/course-add/course-add.component';
import { CourseListComponent } from './components/course-list/course-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CourseAddComponent, CourseListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Course Management App';
  instructor = 'Nikhil';

  courses: Course[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.courseService.getCourses().subscribe({
      next: (data) => {
        this.courses = data;
      },
      error: (err) => console.error('Error fetching courses', err)
    });
  }

  onCourseAdded(course: Course): void {
    this.courses.push(course);
  }

  onCourseDeleted(id: number): void {
    this.courseService.deleteCourse(id).subscribe({
      next: () => {
        this.courses = this.courses.filter(c => c.id !== id);
      },
      error: (err) => console.error('Error deleting course', err)
    });
  }
}
