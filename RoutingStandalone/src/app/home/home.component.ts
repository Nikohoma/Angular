import { Component } from '@angular/core';
import { JobsService } from "../jobs.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  jobs: any[] = [];
  constructor(private srv: JobsService) {
    this.jobs = srv.getJobs();
  }

}
