import { Component } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  newPassword: string = '';
  confirmPassword: string = '';
  constructor(private loginService: LoginService) { }
  onChangePassword() {
    if (this.newPassword === this.confirmPassword) {
      this.loginService.setPassword(this.newPassword);
      console.log('Password changed successfully');
    } else {
      console.log('New password and confirmation password do not match.');
    }
  }
  
  
}
