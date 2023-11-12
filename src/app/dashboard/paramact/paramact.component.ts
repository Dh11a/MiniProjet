import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActiviteService } from 'src/app/Services/activite.service';
import { LoginService } from 'src/app/Services/login.service';
import { Activite } from 'src/app/classes/activite';

@Component({
  selector: 'app-paramact',
  templateUrl: './paramact.component.html',
  styleUrls: ['./paramact.component.css']
})
export class ParamactComponent implements OnInit {
  
  lesActivites: Activite[] = [];
  originalActivites: Activite[] = []; // Store the original list of activities
  searchProjectName: string = '';
  nom:string ='';
  lieu:string ='';

  constructor(private router: Router, private loginService: LoginService, private activiteService: ActiviteService) {}

  ngOnInit(): void {
    this.activiteService.getActivities().subscribe(
      data => {
        this.lesActivites = data;
        this.originalActivites = data; // Save the original list of activities
      }
    );
  }

  onDisconnect() {
    this.loginService.logout();
    this.router.navigate(['/accueil']);
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
  ADDact(){
    let act:Activite =new Activite(10,this.nom,"fff",50,new Date(24-10-2024),this.lieu);
    this.activiteService.createActivity(act).subscribe(
      data=>console.log(data)
    );
      
    }
  }
