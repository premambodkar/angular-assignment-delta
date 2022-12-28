import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonService } from '../common.service';
import { CartModel } from '../model/cart.model';

@Component({
  selector: 'product-list',
  templateUrl: 'product-list.component.html',
})
export class ProductListComponent {
  tempCart: CartModel[] = [];

  @ViewChildren('quentityInput')
  inputs: QueryList<HTMLInputElement>;

  constructor(public commonService: CommonService) {}

  decrement(product_id: string) {
    // if (this.hasProductInTempCart(product_id)) {
    // } else {
    //   this.tempCart.push(
    //     new CartModel({ product_id: product_id, quentity: 10 })
    //   );
    // }
  }

  increment(product_id: string) {}

  addToCart(product_id: string, quentity: string) {
    const cartData = new CartModel({
      product_id: product_id,
      quentity: quentity,
    });
    this.commonService.addToCart(cartData);
  }

  hasProductInTempCart(product_id: string) {
    // return this.tempCart.some((cart: CartModel) => {
    //   return cart.product_id !== product_id;
    // });
  }
}
