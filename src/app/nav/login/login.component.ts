import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  adminForm!: FormGroup;

  constructor(private router: Router, private loginservice: LoginService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.adminForm = this.fb.group({
      username: [''],
      pass: ['']
    });
  }

  onAuthentifie() {
    if (this.adminForm.valid) {
      const username = this.adminForm.get('username')?.value;
      const pass = this.adminForm.get('pass')?.value;
    
      console.log('Attempting login with:', username, pass);
      //test//
    
      if (this.loginservice.login(username, pass)) {
        this.router.navigate(['/dashboard']);
      } else {
        alert("Erreur, Veuillez vérifier l'adresse ou le mot de passe !!");
      }
    } else {
      alert('Veuillez remplir tous les champs correctement.');
    }
  }

  onRetourne() {
    this.router.navigate(['/accueil']);
  }
  }
  

