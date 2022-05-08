import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL, LOCAL_API_URL } from '../globals';
import { Skill } from '../SkillTemplate';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private http: HttpClient) { }

  getSkills(): Observable<Skill[]>{

    return this.http.get<Skill[]>(API_URL+"skill/list");
  }

  editSkill (skill : Skill) : Observable<Skill>{

    return this.http.post<Skill>(API_URL+"skill/add",skill);

  }

  deleteSkill(skill : Skill) : Observable<Skill>
  {
    return this.http.delete<Skill>(API_URL+"skill/delete/"+skill.id);
  }

}
