import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Education } from 'src/app/EducationTemplate';
import { ComunicationService } from 'src/app/services/comunication-service';
import { EducationService } from 'src/app/services/education.service';
import { DialogComponent } from '../dialogc/dialog.component';
import { ImgdialogComponent } from '../imgdialog/imgdialog.component';

@Component({
  selector: 'app-education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.css'],
})
export class EducationCardComponent implements OnInit {
  @Input() edu: any;
  @Input() logued: boolean = false;
  @Output() emitDelete: EventEmitter<string> = new EventEmitter();
  @Output() emitEdit: EventEmitter<string> = new EventEmitter();
  iconEdit: IconDefinition = faPen;
  iconDelete: IconDefinition = faTrash;
  edu_id: string = '';
  edu_title: string = '';
  edu_sub_title: string = '';
  edu_logo: string = '';
  edu_description: string = '';
  start: string = '';
  end: string = '';
  constructor(
    public dialog: MatDialog,
    private comuicationService: ComunicationService
  ) {}

  ngOnInit(): void {
    this.edu_id = this.edu['id'];
    this.edu_title = this.edu['title'];
    this.edu_sub_title = this.edu['subTitle'];
    this.edu_logo = this.edu['logo'];
    this.edu_description = this.edu['description'];
    this.start = this.edu['start'];
    this.end = this.edu['end'];
  }

  onDelete() {
    this.emitDelete.emit();
  }

  onEdit() {
    this.abrirDialogo();
    this.emitEdit.emit();
  }
  abrirDialogo() {
    let j: Education = new Education();
    j.id = Number(this.edu_id);
    j.id = Number(this.edu_id);
    j.logo = this.edu_logo;
    j.title = this.edu_title;
    j.subTitle = this.edu_sub_title;
    j.description = this.edu_description;
    j.start = this.start;
    j.end = this.end;

    const dialogAdd = this.dialog.open(DialogComponent, {
      data: j,
    });
    dialogAdd.afterClosed().subscribe((obj) => {
      if (obj != undefined) {
        //Avisar de cambio para guardar datos y actualizar vista
        this.comuicationService.sendMessage(obj);
      }
    });
  }

  imageOpen(url : String) {
    const dialogAdd = this.dialog.open(ImgdialogComponent, {
      width: '500px',
      height:'500px',
      data: {url : url},
    });
    dialogAdd.afterClosed().subscribe((obj) => {
      if (obj != undefined) {
        //Avisar de cambio para guardar datos y actualizar vista
        this.comuicationService.sendMessage(obj);
      }
    });
  }
}
