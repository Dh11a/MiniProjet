import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActiviteService } from 'src/app/Services/activite.service';
import { Activite } from 'src/app/classes/activite';
import { Membres } from 'src/app/classes/membres';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
constructor(private activiteservice:ActiviteService,private activatedRoute:ActivatedRoute, private router:Router, private fb: FormBuilder){}
lesAct:Activite[]=[];
membres:Membres[]=[];
membreForm!: FormGroup;
Memberform=false;
idActivite:number=0;
  ngOnInit(): void {
    this.activiteservice.getActivities().subscribe(
      data=>this.lesAct=data);
      this.idActivite=+this.activatedRoute.snapshot.params['identif'];

      this.membreForm=this.fb.nonNullable.group({
        id:[0],
        nom:['',[Validators.minLength(3),Validators.required,Validators.pattern('[A-Z][a-zA-Z ]+$'),Validators.minLength(3)]],
        prenom:['',[Validators.pattern('[A-Z][a-zA-Z ]+$')]],
        adresse: [,[Validators.min(0.1),Validators.required,Validators.pattern('[A-Z][a-zA-Z ]+$')]]
       })
  }
  Modifierform(activite: Activite) {
    this.Memberform = true;
  
    this.membreForm.patchValue({
      membre: activite.membre 
    });
  }
  onReturn(){
    this.router.navigate(['/listeactivite'])
  }
  onSubmit(): void {
    if (this.membreForm.valid) {
      const newMember = this.membreForm.value;

      this.activiteservice.addMember(newMember).subscribe(
        (data: any) => { 
          this.membres.push(data); 
        },
        (error: any) => {
          console.error('Error adding event: ', error);
        }
      );
    }
    this.membreForm.reset();
    this.Memberform = false;
  }
 
  membre(){
    this.membreForm.reset();
    this.Memberform=true;
  }
  
}
