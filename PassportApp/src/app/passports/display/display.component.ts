import { Component, OnInit } from '@angular/core';
import { PassportService } from '../../services/passport.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(public srv: PassportService) { }

  ngOnInit(): void {
    this.srv.getPassportsList();
  }

  fillForm(selectedPassport) {
    this.srv.passportData = Object.assign({}, selectedPassport);
  }
  onDelete(pid) {
    if (confirm('Are you sure you want to delete this record?')) {
      this.srv.deletePassport(pid).subscribe(
        res => { alert('Passport deleted!'); this.srv.getPassportsList(); },
        err => { alert('Error Occured : ' + err); }
      )
    }
  }


}
