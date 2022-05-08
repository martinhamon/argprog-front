import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class CanaccesGuard implements CanActivate {
  constructor (public _authService: AuthenticationService,

    public router: Router) {}

canActivate(
          next: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {



      if (!this._authService.isUserLoggedIn()) {

        this.router.navigate(['login']);

        return false;

      }

      return true;

      }

}
