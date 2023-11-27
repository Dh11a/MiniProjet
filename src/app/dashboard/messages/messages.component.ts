import { Component, OnInit } from '@angular/core';
import { ActiviteService } from 'src/app/Services/activite.service';
import { Contact } from 'src/app/classes/contact';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit{

  lesmessages:Contact[]=[];
  constructor(private activitesService:ActiviteService){}
    ngOnInit(): void {
      this.activitesService.getMessages().subscribe(
        data=>{
          this.lesmessages=data
  
        }
      );
  
    }

}
