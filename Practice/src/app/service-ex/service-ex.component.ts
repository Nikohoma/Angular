import { Component } from '@angular/core';
import { UserServiceService} from '../services/user-service.service'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-service-ex',
  standalone: true,
  templateUrl: './service-ex.component.html',
  styleUrl: './service-ex.component.css',
  imports:[FormsModule,CommonModule]
})
export class ServiceExComponent {

  userName: string = '';
  constructor(private srv: UserServiceService) {
    this.userName = this.srv.getUser();
  }

}
