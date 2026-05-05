import { Component } from '@angular/core';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ServiceExComponent } from './service-ex/service-ex.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { AsyncComponent } from './async/async.component';

@Component({
  selector: 'app-root',
  standalone : true,  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [DataBindingComponent,
    ServiceExComponent,
    NavigationComponent,
    AsyncComponent,
  RouterOutlet, RouterLink]
})
export class AppComponent {
  title = 'Practice';
}
