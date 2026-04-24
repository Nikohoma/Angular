import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ApplyJobComponent } from './apply-job/apply-job.component';
import { SavedJobsComponent } from './saved-jobs/saved-jobs.component';
import { JobDetailComponent } from './job-detail/job-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'apply', component: ApplyJobComponent },
  { path: 'saved', component: SavedJobsComponent },
  { path: 'details', component: JobDetailComponent }
];
