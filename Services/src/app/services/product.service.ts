import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  mfgDate: string;
  expDate: string;
}

@Injectable({
  providedIn: 'root'
})

//export interface Product {
//  id: number;
//  name: string;
//  price: number;
//  mfgDate: string;
//  expDate: string;
//}


export class ProductService {

  constructor() { }
  products: Product[] = [
    {id:101,name:'herbal shampoo',price:250.50,mfgDate:'12/12/2025',expDate:'12/12/2026'},
    { id: 102, name: 'face mask', price:50 , mfgDate: '11/23/2025', expDate: '12/23/2026' },
    { id: 103, name: 'face wash', price:350 , mfgDate: '02/12/2026', expDate: '08/01/2026' },
    { id: 105, name: 'hairtone', price: 520, mfgDate: '01/31/2026', expDate: '09/01/2026' },
    { id: 106, name: 'soap', price: 80, mfgDate: '12/29/2025', expDate: '03/01/2026' },
    { id: 107, name: 'lip balm', price:10 , mfgDate: '01/01/2026', expDate: '09/09/2026'}
  ];

  public displayProducts(): Product[] {
    return this.products;
  }

  public RegisterProduct(product: Product): void {
    this.products.push(product);
  }
}
