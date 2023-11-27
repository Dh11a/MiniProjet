import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  searchProjectId!:number;
  nom:string ='';
  lieu:string ='';
  dispo:boolean=false;
  Membres : Activite[]=[];
  activiteForm!: FormGroup;
  Modifyform=false;
  ajoutform=false;
  constructor(private router: Router, private loginService: LoginService, private activiteService: ActiviteService , private memberservice:MembreService,private fb:FormBuilder) {}

  ngOnInit(): void {
    this.activiteService.getActivities().subscribe(
      data => {
        this.lesActivites = data;
        this.originalActivites = data; // tsavi the original list of activities
      }
    );

    this.activiteForm=this.fb.nonNullable.group({
      id: [null],
      nom:['',[Validators.minLength(3),Validators.required,Validators.pattern('[A-Z][a-zA-Z ]+$'),Validators.minLength(3)]],
      image:['',[Validators.pattern('[a-z][a-zA-Z]+.+[a-zA-Z][a-zA-Z]+$')]],
      prix: [,[Validators.min(0.1),Validators.required,Validators.pattern('[0-9]?[0-9]?[0-9]')]],
      date : ['',[Validators.required,Validators.pattern('[0-9][0-9]+-+[0-9][0-9]+-+[0-9][0-9][0-9][0-9]')]],
      lieu:['',[Validators.minLength(3),Validators.required]],
      disponible:['false']
     })
  }

  Modifierform(activite: Activite) {
    this.Modifyform = true;
  
   
    this.activiteForm.patchValue({
      id: activite.id,
      nom: activite.nom,
      image: activite.image,
      prix: activite.prix,
      date: activite.date,
      lieu: activite.lieu,
      disponible: activite.disponible 
    });
  }
  public get Id(){
    return this.activiteForm.get('id');
  }
  public get Nom(){
    return this.activiteForm.get('nom');
  }
  public get Image(){
    return this.activiteForm.get('image');
  }
  public get Prix(){
    return this.activiteForm.get('prix');
  }
  public get Date(){
    return this.activiteForm.get('date');
  }
  public get Lieu(){
    return this.activiteForm.get('lieu');
  }
  public get Dispo(){
    return this.activiteForm.get('disponible')
  }
  isValidPattern(){
    return this.Image?.errors?.['pattern'] && this.Image?.dirty
  }
  isValidPrix(){
    return this.Prix?.errors?.['min'] && this.Prix?.errors?.['pattern'] && this.Prix?.dirty
  }
  isValidPatternDate(){
    return this.Date?.errors?.['pattern'] && this.Date?.dirty
  }


  searchActivite() {
    const searchId = this.searchProjectId !== null && this.searchProjectId !== undefined ? +this.searchProjectId : null;
  
    if (searchId !== null) {
      // If search query is not empty
      this.lesActivites = this.originalActivites.filter(activite =>
        activite.id === searchId
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
    this.activiteService.deleteActivity(activite.id).subscribe(
      () => {
        this.lesActivites = this.lesActivites.filter(a => a.id !== activite.id);
      },
    );
  }
  
    ajouteform(){
      this.ajoutform=true;
    }
    Ajouter(){
      alert("L'activité est ajouté !")
      this.activiteService.createActivity(this.activiteForm.value as Activite).subscribe(data=>{
        this.lesActivites.push(data);
      })
      this.activiteForm.reset();
      this.ajoutform=false;
    }
    onSubmitFormm() {
      const idToUpdate = this.Id?.value;
      const updatedActivity = this.activiteForm.value as Activite;
    
      this.activiteService.updateActivity(idToUpdate, updatedActivity).subscribe(
        data => {
          console.log('Update Successful:', data);
          
          // index updated act
          const index = this.lesActivites.findIndex(a => a.id === idToUpdate);
          
          // Update the local list with the modified activity
          if (index !== -1) {
            this.lesActivites[index] = data;
          }
    
          alert("L'activité a été modifiée avec succès !");
        },
        error => {
          console.error('Error updating activity:', error);
          alert("Une erreur s'est produite lors de la modification de l'activité. Veuillez réessayer.");
        }
      );
    
      this.activiteForm.reset();
      this.Modifyform = false;
    }
    
    
    
    onLeaveAjout(){
      this.ajoutform=false;
    }
    onLeaveModify(){
      this.Modifyform=false;
    }
}
