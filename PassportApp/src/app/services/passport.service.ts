import { Injectable } from '@angular/core';
import { Passport } from '../model/passport.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PassportService {

  passportData: Passport = new Passport();
  passportList: Passport[] = [];

  readonly passportApiUrl = "https://localhost:7208/api/Passports";

  constructor(private objHttp: HttpClient) { }

  getPassportsList() {
    this.objHttp.get<Passport[]>(this.passportApiUrl)
      .subscribe({
        next: res => {
          console.log("API DATA:", res);
          this.passportList = res;
        },
        error: err => console.error(err)
      });
  }
  postPassport() {
    return this.objHttp.post(this.passportApiUrl, this.passportData);
  }

  deletePassport(id) {
    return this.objHttp.delete(this.passportApiUrl + '/' + id);
  }

  putPassport() {
    return this.objHttp.put(this.passportApiUrl + '/' + this.passportData.Id, this.passportData);
  }
}
