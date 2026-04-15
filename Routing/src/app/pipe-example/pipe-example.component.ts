import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrl: './pipe-example.component.css'
})
export class PipeExampleComponent {
  course_name = '.net angular fullstack';
  start_date = new Date();
  course_fee = 4500;
  marks_percent = 0.89;
  course_description = 'Angular is a SPA';
  student_details = { roll_number: 101, name: "Sam", University: "LPU" };
}
