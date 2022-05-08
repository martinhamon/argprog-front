import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/services/auth.service';
import { JobsService } from 'src/app/services/jobs.service';
import { DialogComponent } from '../dialogc/dialog.component';
import { Job } from 'src/app/jobsTemplate';
import { Education } from 'src/app/EducationTemplate';
import { Project } from 'src/app/ProjectTemplate';

import { EventEmitter } from '@angular/core';
import { ComunicationService, } from 'src/app/services/comunication-service';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { Profile } from 'src/app/profileTemplate';
import { Skill } from 'src/app/SkillTemplate';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logued :boolean = false
  adm : boolean = false
  profile :Profile=new Profile()
  @Output() emitJobAdd : EventEmitter <any> = new EventEmitter()
  constructor(private auth : AuthenticationService, public dialog: MatDialog
    , private jobService : JobsService, private comuicationService : ComunicationService,
    private route :Router, private profileService : ProfileService
    ) { }

  ngOnInit(): void {
    this.logued= this.auth.isUserLoggedIn()
  this.adm = this.auth.isAdmin()
  this.profile.logo="../../../assets/images/avatar.jpg"
   this.profileService.getProfile(1).subscribe(data=> {
    
      this.profile=data

   })

  }

  isLoguedIn():boolean
  {
   return this.auth.isUserLoggedIn()
  }
  abrirDialogo(addType : string) {
    let j : Job = new Job()
    let e : Education =  new Education()
    let p : Project = new Project()
    let s : Skill = new Skill()
    let obj = undefined

    if (addType==="job")
        obj=j
    else if (addType==="education")
        obj=e
        else if (addType==="project")
        obj=p
        else if (addType==="skills")
        obj=s


    const dialogAdd = this.dialog.open(DialogComponent, {
      height: '600px',
      width: '400px',
     data: obj

    });
   dialogAdd.afterClosed().subscribe(obj => {
      if (obj != undefined)
      {

      this.comuicationService.sendMessage(obj)

      }

    });
  }
  onEdit(){
    this.route.navigate(['/profile'])
    this.comuicationService.sendMessage(this.profile)
  }
}
