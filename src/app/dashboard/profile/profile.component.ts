import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  passwordForm: FormGroup;

  constructor(private loginService: LoginService, private fb: FormBuilder) {
    this.passwordForm = this.fb.group({
      newPassword: [''],
      confirmPassword: ['']
    });
  }

  onChangePassword() {
    const newPassword = this.passwordForm.get('newPassword')?.value;
    const confirmPassword = this.passwordForm.get('confirmPassword')?.value;

    if (newPassword == confirmPassword) {
      this.loginService.setPassword(newPassword);
      alert('Password changed successfully');
      this.passwordForm.reset();
    } else {
      alert('New password and confirmation password do not match.');
      this.passwordForm.reset();
    }
  }
  
}
