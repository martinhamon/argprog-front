import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Skill } from 'src/app/SkillTemplate';

@Component({
  selector: 'app-skills-card',
  templateUrl: './skills-card.component.html',
  styleUrls: ['./skills-card.component.css']
})
export class SkillsCardComponent implements OnInit {
  @Input() logued : boolean=false;
  @Input() skills : Skill[]=[]
  iconEdit:IconDefinition =faPen
  iconDelete: IconDefinition =  faTrash
  color: ThemePalette = "accent";
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
  diameter: number = 45
  @Output() emitDeleteSkill : EventEmitter <Skill>= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }


  onDelete(skill : Skill){
    this.emitDeleteSkill.emit(skill)
  }
}
