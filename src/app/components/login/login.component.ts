import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService  } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
 form : FormGroup;
 error : String=""
  constructor(private formBuilder :FormBuilder, private authService : AuthenticationService  , private rute : Router ) {
    this.form = this.formBuilder.group({
      userName : ['',[Validators.required]],//, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(4)]],


    });
  }

  ngOnInit(): void {
  }
   get Email ()
   {
      return this.form.get('userName');
   }

   get Password (){
    return this.form.get('password');
   }


   onLogin (event : Event){
     event.preventDefault
     this.authService.authenticate( this.form.get('userName')?.value,this.form.get('password')?.value).subscribe(
       data =>{
      // console.log("Data:  " + JSON.stringify(data))
       this.rute.navigate(['/portfolio'])
     },
     console=>{
            this.error="Credenciales no validas!!!"
     });

   }

}
