import { Component, OnInit } from '@angular/core';
import { PassportService } from '../../services/passport.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public srv: PassportService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.resetForm();
    }

    this.srv.passportData = {
      Id: 0,
      HolderName: '',
      PassportNumber: '',
      ExpiryDate: '',
      PPOCode: ''
    };
  }

  createPassport(form: NgForm) {
    const id = Number(this.srv.passportData.Id);

    if (id === 0) {
      console.log("POST");
      this.srv.postPassport().subscribe({
        next: () => {
          this.resetForm(form);
          this.srv.getPassportsList();
        }
      });
    } else {
      console.log("PUT");
      this.srv.putPassport().subscribe({
        next: () => {
          this.resetForm(form);
          this.srv.getPassportsList();
        }
      });
    }
  }
}
