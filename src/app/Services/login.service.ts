import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  passwordKey = 'PasswordKey'; //  key local storage

  //if pass existe or initialiser  default to 'pwd'
  password: string = localStorage.getItem(this.passwordKey) || 'pwd';

  login(admin: string, pwd: string): boolean {
    if (admin == 'admin' && pwd == this.password) {
   
      localStorage.setItem('etat', 'connected');
      return true;
    } else {
      localStorage.setItem('etat', 'disconnected');
      return false;
    }
  }
  
  setPassword(newPassword: string): void {
    this.password = newPassword;
    localStorage.setItem(this.passwordKey, newPassword);
    //changer pass local  
    console.log('Password changed to:', this.password);
  }
  

  logout() {
    localStorage.removeItem('etat');
  }
}
