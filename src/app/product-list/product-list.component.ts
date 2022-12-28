import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { CartModel } from '../model/cart.model';

@Component({
  selector: 'product-list',
  templateUrl: 'product-list.component.html',
})
export class ProductListComponent {
  constructor(public commonService: CommonService) {}

  decrement() {}

  increment() {}

  addToCart(product_id: number, quentity: number) {
    const cartData = new CartModel({
      product_id: product_id,
      quentity: quentity,
    });
    this.commonService.addToCart(cartData);
  }
}
