import { Injectable } from '@angular/core';
import { CartModel } from './model/cart.model';
import { ProductModel } from './model/product.model';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  productList: ProductModel[] = [];
  cart: CartModel[] = [];
  constructor() {
    this.addproduct(new ProductModel({ name: 'TV', price: 2000 }));
    this.addproduct(new ProductModel({ name: 'Fridge', price: 2000 }));
    this.addproduct(new ProductModel({ name: 'Dishwasher', price: 2000 }));
    this.addproduct(new ProductModel({ name: 'Washing Machine', price: 2000 }));
  }

  addproduct(productDetails: ProductModel) {
    if (
      this.productList.every((item: ProductModel) => {
        return (
          item.name.toLocaleLowerCase() !==
          productDetails.name.toLocaleLowerCase()
        );
      })
    ) {
      this.productList.push(productDetails);
    }
  }

  addToCart(cartData: CartModel) {
    if (
      this.cart.every((item: CartModel) => {
        return item.product_id !== cartData.product_id;
      })
    ) {
      this.cart.push(cartData);
    } else {
      this.updateCartQuantity(cartData);
    }
  }

  updateCartQuantity(cartData: CartModel) {
    this.cart.forEach((cartItem: CartModel) => {
      if (cartItem.product_id === cartData.product_id) {
        cartItem.quentity = +cartData.quentity;
      }
    });
  }
}
