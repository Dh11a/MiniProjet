import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  onMessage(adresse:string,subject:string,message:string){
    if((adresse="") || (subject="") || (message="")){
      alert('vous devez remplir les champs obligatoire !!');
    }
    else{
      alert('Merci pour votre commantaire!');
    }
  }

}
