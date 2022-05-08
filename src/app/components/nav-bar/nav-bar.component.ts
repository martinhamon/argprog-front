import { AfterContentChecked, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit,AfterContentChecked {
    @Input() isAuthenticated: boolean=false;
    @Output() LogOutClick = new EventEmitter();
    @Output() LogInClick = new EventEmitter();

  constructor(public _authService: AuthenticationService,private router: Router
    ) {


   }
  ngAfterContentChecked(): void {
   // console.log("11111111111111111111111111");
    this.isAuthenticated = this._authService.isUserLoggedIn()
  }

  ngOnInit(): void {

  }
  onLogOutClick( boolLog : boolean):void{

  //  console.log("LogOut");
    this.LogOutClick.emit(boolLog);
    this._authService.logOut()
  }

  onLogInClick(boolLog : boolean): void
  {

    this.router.navigate(['/login']);
   // console.log("LogIn");
    //this.LogInClick.emit(boolLog);
  }
  redirecTo(url : string)
  {
      window.location.href=url
  }
}
