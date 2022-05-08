import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../EducationTemplate';
import { API_URL } from '../globals';

@Injectable({
  providedIn: 'root'
})
export class EducationService {


  constructor(private http: HttpClient) {

   }

  getEducation() : Observable < Education[]> {
    //const tasks = of(TASKS);

    return this.http.get<Education[]>(API_URL+"education/list");
  }
  deleteEducation(edu : Education) : Observable<Education>{
    return this.http.delete<Education>(API_URL+"education/delete/"+edu.id)
  }

  ediatAddEducation (edu : Education): Observable<Education>{
    return this.http.post<Education>(API_URL+"education/add",edu)
  }
}
