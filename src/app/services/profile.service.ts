import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../globals';
import { Profile } from '../profileTemplate';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http : HttpClient) { }

  public getProfile (id :Number) : Observable<Profile>{

     let profile =this.http.get<Profile>(API_URL+"profile/get")
    return profile
  }

  public saveProfile ( profile : Profile): Observable<Profile>{
        return this.http.post<Profile>(API_URL+"profile/save",profile)
  }

}
