import { Component } from '@angular/core';
import { ActiviteService } from 'src/app/Services/activite.service';
import { Activite } from 'src/app/classes/activite';

@Component({
  selector: 'app-modifieractivite',
  templateUrl: './modifieractivite.component.html',
  styleUrls: ['./modifieractivite.component.css']
})
export class ModifieractiviteComponent {
  constructor(private activiteService:ActiviteService){}
  lesActivites:Activite[]=[];
  id:number=0;
}
