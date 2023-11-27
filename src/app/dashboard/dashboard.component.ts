import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {
  Activite: any;
  constructor(private router:Router,private loginservice:LoginService,){}
onDisconnect(){
  this.loginservice.logout();
  this.router.navigate(['/accueil']);
}
}
