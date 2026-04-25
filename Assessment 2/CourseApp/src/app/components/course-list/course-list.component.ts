import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/course';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-list.component.html'
})
export class CourseListComponent {
  @Input() courses: Course[] = [];
  @Output() courseDeleted = new EventEmitter<number>();

  onDelete(id?: number): void {
    if (id) {
      this.courseDeleted.emit(id);
    }
  }
}
