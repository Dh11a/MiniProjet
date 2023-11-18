import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private router:Router) { }
  //username:string,pwd:string
  login(admin:string,pwd:string){
    if(admin=="admin" && pwd=="pwd"){
      this.setPassword('newPassword');
      localStorage.setItem("etat","connected");
      return true;
    }
    else{
      localStorage.setItem("etat","disconnected");
      return false;
    }
 
  }
  password: string = 'pwd';


  setPassword(newPassword: string): void {
    this.password != newPassword;
    console.log('Password changed to:', this.password);
  }

  logout(){localStorage.removeItem("etat");}
}
