import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Profile } from 'src/app/profileTemplate';
import { ComunicationService } from 'src/app/services/comunication-service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 profile : Profile= new Profile()
 logoValid:boolean=false
 private comuServiceEndRef : Subscription =new Subscription
  constructor( private comuicationService : ComunicationService, private profileService : ProfileService,
    private rute : Router
      ) { }
  ngOnDestroy() {
    this.comuServiceEndRef.unsubscribe()
  }
  ngOnInit(): void {
    this.profile.logo="../../../assets/images/avatar.jpg"
    this.profileService.getProfile(1).subscribe(data=> {
      this.profile=data
      if(!this.islogoValid())
      {
        this.profile.logo="../../../assets/images/avatar.jpg"
      }
   })
    this.comuServiceEndRef=this.comuicationService.sendMessageObservable.subscribe(response =>{
      console.log("Evento disparado.........");

        if (response instanceof Profile )
         {
          this.profile=response
          console.log("profile" + this.profile.description)
          }

      })


  }
 islogoValid(){

   return  this.profile.logo.length >0
 }

 OnUpdate(){

  this.profileService.saveProfile(this.profile).subscribe(response => {
    this.rute.navigate(['/portfolio'])
  })

 }

 changeUrl(){
   this.profile.logo="https://media.minutouno.com/p/1ddfd182b04d8558db3bdb68b3e5a1a1/adjuntos/150/imagenes/039/600/0039600580/mayonesa-natura.jpg"
 }
}
