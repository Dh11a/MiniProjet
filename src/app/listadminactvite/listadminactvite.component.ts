import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActiviteService } from 'src/app/Services/activite.service';
import { LoginService } from 'src/app/Services/login.service';
import { MembreService } from 'src/app/Services/membre.service';
import { Activite } from 'src/app/classes/activite';
import { Membres } from 'src/app/classes/membres';

@Component({
  selector: 'app-listadminactvite',
  templateUrl: './listadminactvite.component.html',
  styleUrls: ['./listadminactvite.component.css']
})
export class ListadminactviteComponent implements OnInit{
  lesActivites: Activite[] = [];
  originalActivites: Activite[] = []; // Store the original list of activities
  searchProjectName: string = '';
  nom:string ='';
  lieu:string ='';
  Membres : Membres[]=[];

  constructor(private router: Router, private loginService: LoginService, private activiteService: ActiviteService , private memberservice:MembreService) {}

  ngOnInit(): void {
    this.activiteService.getActivities().subscribe(
      data => {
        this.lesActivites = data;
        this.originalActivites = data; // Save the original list of activities
      }
    );
  }

  

  searchActivite() {
    const searchName = this.searchProjectName.toLowerCase(); // Convert to lowercase

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
  
  onDeleteActivite(activite: Activite) {
    // Call the service method to delete the activity
    this.activiteService.deleteActivity(activite.id).subscribe(
      () => {
        // If deletion is successful, remove the deleted activity from the local list
        this.lesActivites = this.lesActivites.filter(a => a.id !== activite.id);
      },
    );
  }
  

    voirMembre(){
      this.memberservice.getMembres().subscribe(
        (data: Membres[]) => {this.Membres = data;}
      );
    }
}
