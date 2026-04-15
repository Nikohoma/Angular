import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrl: './emp-detail.component.css'
})
export class EmpDetailComponent implements OnInit {
  empid: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Component initialization logic can go here.
    this.empid = this.route.snapshot.paramMap.get('id');
  }
}
