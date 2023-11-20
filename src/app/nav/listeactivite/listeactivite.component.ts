import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActiviteService } from 'src/app/Services/activite.service';

import { Activite } from 'src/app/classes/activite';

@Component({
  selector: 'app-listeactivite',
  templateUrl: './listeactivite.component.html',
  styleUrls: ['./listeactivite.component.css']
})
export class ListeactiviteComponent implements OnInit {
lesActivites:Activite[]=[];
constructor(private activitesService:ActiviteService,private router:Router ){}
  ngOnInit(): void {
    this.activitesService.getActivities().subscribe(
      data=>this.lesActivites=data
    );
  }  
  onMove(){
    this.router.navigate(['/listeactivite/info']);

  }
}
