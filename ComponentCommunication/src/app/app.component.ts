import { Component } from '@angular/core';
import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ComponentCommunication';
}
