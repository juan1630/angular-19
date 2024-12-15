import { Component } from '@angular/core';
import { Product } from '../../common/services/interfaces/Products.interface';

@Component({
  selector: 'app-store',
  imports: [],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent {

  public productsList: Product[] =  [{product:'tele', amount: 20, id: 1}, {product: 'Iphone', amount:500, id: 2} ];

  addProduct(product:string, amount:string) {
    this.productsList.push({product, amount: Number(amount), id: 3 })
  }
}
