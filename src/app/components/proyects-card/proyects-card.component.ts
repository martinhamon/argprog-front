import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Project } from 'src/app/ProjectTemplate';
import { ComunicationService } from 'src/app/services/comunication-service';
import { DialogComponent } from '../dialogc/dialog.component';

@Component({
  selector: 'app-proyects-card',
  templateUrl: './proyects-card.component.html',
  styleUrls: ['./proyects-card.component.css']
})
export class ProyectsCardComponent implements OnInit {
  @Input() prj:any
  @Input() logued : boolean=false;
  @Output() emitDelete : EventEmitter <string>= new EventEmitter();
  @Output() emitEdit : EventEmitter <string>= new EventEmitter();
  iconEdit:IconDefinition =faPen
  iconDelete: IconDefinition =  faTrash
  id: string=""
  title : string =""
  subTitle: string =""
  description: string =""
  url: string =""
  constructor(public dialog: MatDialog, private comuicationService : ComunicationService ) { }

  ngOnInit(): void {
    this.id=this.prj["id"]
    this.title = this.prj["title"]
    this.subTitle=this.prj["subTitle"]
    this.description=this.prj["description"]
    this. url=this.prj["url"]
  }
  onDelete(){
    this.emitDelete.emit()
  }
 onEdit(){
  this.abrirDialogo(this.prj)
  this.emitEdit.emit()
 }

 abrirDialogo(p : Project) {
  let pro : Project = new Project()
  pro.title=this.title
  pro.subTitle=this.subTitle
  pro.description = this.description
  pro.url = this.url
  pro.id=Number (this.id)


  const dialogAdd = this.dialog.open(DialogComponent, {
   data: pro
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
