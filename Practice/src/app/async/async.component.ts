import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-async',
  standalone:true,
  templateUrl: './async.component.html',
  styleUrl: './async.component.css',
  imports:[ReactiveFormsModule]
})
export class AsyncComponent {

  res: any = [];

  obs$ = new Observable(o => {
    o.next("Hello"),
      o.next("Hi"),
      o.next("Bye")
  });

  ngOnInit() {
    this.obs$.subscribe(d => {
      this.res.push(d);
    });
  }

  form = new FormGroup({
    username: new FormControl('', Validators.required)
  })

  onSubmit() {
    alert("Username : " + this.form.value.username);
  }
}

