import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActiviteService } from 'src/app/Services/activite.service';
import { Activite } from 'src/app/classes/activite';

@Component({
  selector: 'app-ajouteractivite',
  templateUrl: './ajouteractivite.component.html',
  styleUrls: ['./ajouteractivite.component.css']
})
export class AjouteractiviteComponent implements OnInit {
  lesAct:Activite[]=[];
  activiteForm!: FormGroup;
  constructor(private fb:FormBuilder,private activiteservice:ActiviteService){}
  ngOnInit(): void {
   this.activiteForm=this.fb.group({
    nom:[''],
    image:[''],
    prix: [],
    date : [''],
    lieu:['']
   })
  }
  
  onSubmitForm(){
    console.log(this.activiteForm.value)
    this.activiteservice.createActivity(this.activiteForm.value as Activite).subscribe(data=>{
      this.lesAct.push(data);
    })
  }
}
