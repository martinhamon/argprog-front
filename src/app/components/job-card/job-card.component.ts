import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Job } from 'src/app/jobsTemplate';

import { faPen, faPenFancy, faTrash, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { JobsService } from 'src/app/services/jobs.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialogc/dialog.component';
import { ComunicationService } from 'src/app/services/comunication-service';
@Component({
  selector: 'app-mh-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent implements OnInit {
  @Input() job:any
  @Input() logued : boolean=false;
  @Input () adm : boolean = false
  @Output() emitDelete : EventEmitter <string>= new EventEmitter();
  @Output() emitEdit : EventEmitter <string>= new EventEmitter();
  iconEdit:IconDefinition =faPen
  iconDelete: IconDefinition =  faTrash
  title : string = ""
  subTitle: string = ""
  logo: string = ""
  tasks: string = ""
  job_id: string=""
  start: string = ""
  end: string = ""

  constructor( public dialog: MatDialog, private comuicationService : ComunicationService ) { }

  ngOnInit(): void {


    this.logo=this.job["logo"]
    this.title =this.job["title"]
    this.subTitle=this.job["subTitle"]
    this.tasks=this.job["tasks"]
    this.start=this.job["start"]
    this.end=this.job["end"]
    this.job_id = this.job["id"]
  }

onDelete (j : string) : void{

this.emitDelete.emit(this.job_id);

}


onEdit() : void {
  console.log("Editando")
  this.emitEdit.emit()
  this.abrirDialogo()
}


abrirDialogo() {
  let j : Job = new Job()
  j.id=Number( this.job_id)
  j.logo=this.logo
  j.title = this.title
  j.subTitle=this.subTitle
  j.tasks=this.tasks
  j.start=this.start
  j.end=this.end

  const dialogAdd = this.dialog.open(DialogComponent, {
   data: j
  });
 dialogAdd.afterClosed().subscribe(obj => {
    if (obj != undefined)
    {

    //Avisar de cambio para guardar datos y actualizar vista
    this.comuicationService.sendMessage(obj)


    }

  });
}


}
