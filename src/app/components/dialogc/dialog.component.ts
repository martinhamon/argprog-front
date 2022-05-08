import { Component, OnInit, Inject, Output } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Education } from 'src/app/EducationTemplate';
import { Job } from 'src/app/jobsTemplate';
import { Project } from 'src/app/ProjectTemplate';
import { Skill } from 'src/app/SkillTemplate';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
 job :Job = new Job()
 edu :Education = new Education()
 skill : Skill = new Skill()
 pro : Project = new Project()
 //@Output() addData : EventEmitter<Job>= new EventEmitter()
  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @ Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.dialogRef.disableClose = true;

   // this.dialogRef.backdropClick().subscribe(_ => {
     // this.dialogRef.close(this.pro);
  //  })
  }
  cancelar() {
    this.dialogRef.close();
  }
 isJob(): boolean{

   // console.log("isjob   "+ (this.data instanceof  Job))
    this.job =this.data
    this.data=this.job
    return this.data instanceof  Job;
  }
  isEducation(): boolean{
 //   console.log(" isEducation  "+ (this.data instanceof  Education))
  this.edu =this.data
    this.data=this.edu
    return this.data instanceof  Education;
  }
 /* isSkill(): boolean{
    console.log(this.data instanceof  Education)
    return this.data instanceof  Job;
  }*/
  isProject(): boolean{
 //   console.log(this.data instanceof  Project)
      this.pro =this.data
    this.data=this.pro
    return this.data instanceof  Project;
  }
  isSkill(): boolean{
    //   console.log(this.data instanceof  Project)
         this.skill =this.data
       this.data=this.skill
       return this.data instanceof  Skill;
     }

  updateDateJobStart(date : any){
     if(this.isJob())
     {
      this.job.start=date.value


     }
  }
  updateDateEducationStart(date : any){
    if(this.isEducation())
    {
     this.edu.start=date.value


    }
 }

  updateDateJobEnd (date : any){
    if(this.isJob())
    {
     this.job.end=date.value


    }
 }

 updateDateEducationEnd(date : any){
  if(this.isEducation())
  {
   this.edu.end=date.value


  }
}
}
