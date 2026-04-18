import { Component } from '@angular/core';

@Component({
  selector: 'app-asyncpipeex',
  templateUrl: './asyncpipeex.component.html',
  styleUrl: './asyncpipeex.component.css'
})
export class AsyncpipeexComponent {
  pizzaOrder$ = new Promise<string>((resolve, reject) => {
    console.log('Pizza Order is received (Pending)');

    setTimeout(() => {
      console.log('Pizza preparation is started...');

      setTimeout(() => {
        console.log('Pizza is ready!');
        resolve('Pizza Delivered!');
      }, 3000);

    }, 5000);
  });
}
