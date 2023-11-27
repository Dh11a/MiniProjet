import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ActiviteService } from 'src/app/Services/activite.service';
import { Contact } from 'src/app/classes/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  implements OnInit{
  contactForm!: FormGroup;
  constructor(private activiteService: ActiviteService , private fb:FormBuilder) {}
  message:Contact[]=[];
  ngOnInit(): void {


    this.contactForm=this.fb.nonNullable.group({
      nom:[''],
      email:[''],
      subject: [''],
      message: [''],

     })
  }
  onMessage(adresse:string,subject:string,message:string){
    if((adresse="") || (subject="") || (message="")){
      alert('vous devez remplir les champs obligatoire !!');
    }
    else{
      alert('Merci pour votre commantaire!');
    }
  }
  onSubmit(){
    alert("Message envoye")
    this.activiteService.createMessage(this.contactForm.value as Contact).subscribe(data=>{
      this.message.push(data);
    })
    this.contactForm.reset();
  }

}
