import { Component, Input } from '@angular/core';
import { CommonService } from '../../common.service';
import { CartModel } from '../../model/cart.model';

@Component({
  selector: 'quentity-input',
  templateUrl: 'quentity-input.component.html',
})
export class QuentityInputComponent {
  quentity: number = 0;

  @Input()
  productid: string;

  constructor(private readonly commonService: CommonService) {}

  increment() {
    ++this.quentity;
  }

  decrement() {
    if (this.quentity > 0) {
      --this.quentity;
    }
  }

  addToCart() {
    if (this.quentity > 0) {
      const cartData = new CartModel({
        product_id: this.productid,
        quentity: this.quentity,
      });
      this.commonService.addToCart(cartData);
    }
  }
}
