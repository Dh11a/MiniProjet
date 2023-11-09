import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router,private loginservice:LoginService){}
  onAuthentifie(admin:string,pwd:string){
    if(this.loginservice.login(admin,pwd)){
      this.router.navigate(['/dashboard']);

    }
    else{
      alert('Erreur 404');
    }
}
onRetourne(){
  this.router.navigate(['/accueil']);
}
}
