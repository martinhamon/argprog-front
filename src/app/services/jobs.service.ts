import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../jobsTemplate';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../globals';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http: HttpClient) {

   }

  getJobs() : Observable < Job[]> {
    //const tasks = of(TASKS);

    return this.http.get<Job[]>(API_URL+"job/list");
  }
  deleteJob(job : Job) : Observable < Job>{

    return this.http.delete<Job>(API_URL+"job/delete/"+job.id);
  }

  editJob(job : Job): Observable <Job>{
    return this.http.post<Job>(API_URL+"job/add",job);
  }
}
