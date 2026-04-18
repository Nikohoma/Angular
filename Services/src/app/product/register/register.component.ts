import { Component } from '@angular/core';
import { ProductService } from "../../services/product.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  product: { id, name, price, mfgDate, expDate } = { id: null, name: '', price: '', mfgDate: '', expDate: '' };

  constructor(public srv: ProductService) { }

  regProduct() {
    this.srv.RegisterProduct(this.product); alert("Product successfully added.");
    this.product = { id: null, name: '', price: '', mfgDate: '', expDate: '' };  // Clearing  
  }
}
