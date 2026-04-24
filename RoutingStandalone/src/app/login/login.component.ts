import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  userpwd: string = '';
  msg: string = '';
  isSuccess: boolean = false;

  login() {
    if (this.username === 'sam1256' && this.userpwd === 'sam@123') {
      this.msg = "Login Successful";
      this.isSuccess = true;
    } else {
      this.msg = "Check Credentials again";
    }
  }
}
