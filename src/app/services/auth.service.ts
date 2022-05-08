import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, observable } from 'rxjs';
import { map } from 'rxjs';
import { Router } from '@angular/router';
import {Rol} from '../rolTemplate';
import { API_URL } from '../globals';
export class User {
  constructor(public status: string) {}
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService  {
  url  =""
  private isadmin =false
  currentUserSubjet : BehaviorSubject <any>;
  constructor(private httpClient: HttpClient  , private router:Router) {

    this.currentUserSubjet= new BehaviorSubject <any > (JSON.parse(sessionStorage.getItem('currentUser') || '{}'))
   }

   authenticate(username : string, password : string) {
    return this.httpClient
      .post<any>(API_URL+"login", { username, password })
      .pipe(
        map((userData: { token: string; roles: any; }) => {
          sessionStorage.setItem("username", username);
          let tokenStr = "Bearer " + userData.token;
          sessionStorage.setItem("token", tokenStr);
          sessionStorage.setItem("roles",  JSON.stringify(userData.roles))

          return userData;
        })
      );
   }

   public  isAdmin() :boolean{



      return sessionStorage.getItem("roles")?.indexOf("ROLE_ADMIN") != -1;




   }



   isUserLoggedIn() {
    let user = sessionStorage.getItem("username");
   // console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("token");

    this.router.navigate(['login']);
  }
}
