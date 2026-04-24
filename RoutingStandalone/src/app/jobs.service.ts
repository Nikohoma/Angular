import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor() { }
  jobs = [
    {id:1, title:'SDE',company:'Amazon',exp:'2+'},
    {id:2, title:'SWE',company:'VISA',exp:'3+'},
    {id:3, title:'SRE',company:'Walmart',exp:'1+'},
    { id:4, title: 'DevOps', company: 'Google', exp: '5+' }
  ];
  savedJobs: any[] = [];

  getJobs() {
    return this.jobs;
  }

  getJobById(id:number) {
    return this.jobs.find(j=>j.id == id)
  }

  saveJob(job: any) {
    this.savedJobs.push(job);
  }

  getSavedJobs() {
    return this.savedJobs;
  }

}
