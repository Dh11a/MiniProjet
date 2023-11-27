import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ActiviteService } from 'src/app/Services/activite.service';

import { Activite } from 'src/app/classes/activite';
@Component({
  selector: 'app-listeactivite',
  templateUrl: './listeactivite.component.html',
  styleUrls: ['./listeactivite.component.css']
})
export class ListeactiviteComponent implements OnInit {
  searchProjectnom!:'';
lesActivites:Activite[]=[];
originalActivites: Activite[] = []; // Store the original list of activities
activite?:Activite;
constructor(private activitesService:ActiviteService,private router:Router, private fb:FormBuilder){}
  ngOnInit(): void {
    this.activitesService.getActivities().subscribe(
      data=>{
        this.lesActivites=data
        this.originalActivites = data; // tsavi the original list of activities

      }
    );

  }

 
  searchActivite() {
    const searchName = this.searchProjectnom.toLowerCase(); // Convert to lowercase

    if (searchName) {
      // If search query is not empty
      this.lesActivites = this.originalActivites.filter(activite =>
        activite.nom.toLowerCase().includes(searchName)
      );
      
      // If there are no matching activities, reset the list to all activities
      if (this.lesActivites.length === 0) {
        this.lesActivites = this.originalActivites;
      }
    } else {
      // If search query is empty, show all activities
      this.lesActivites = this.originalActivites;
    }
}
}
