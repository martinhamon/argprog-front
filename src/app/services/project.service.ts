import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../globals';
import { Project } from '../ProjectTemplate';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {


  constructor(private http: HttpClient) {

   }

  getProjects() : Observable < Project[]> {


    return this.http.get<Project[]>(API_URL+"project/list");
  }

  projectDelete(pro : Project) : Observable<Project>{


    return this.http.delete<Project>(API_URL+"project/delete/"+pro.id)
  }
  editAddProject (pro : Project) : Observable<Project>
  {
    return this.http.post<Project>(API_URL+"project/add",pro)
  }
}
