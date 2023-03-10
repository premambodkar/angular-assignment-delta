import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartModel } from './model/cart.model';
import { ProductModel } from './model/product.model';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  productList: ProductModel[] = [];
  cart: CartModel[] = [];
  dialogRef!: any;

  cartUpdated = new Subject();
  _cartUpdated = this.cartUpdated.asObservable();

  constructor() {
    this.initialData();
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
    if (this.dialogRef) {
      this.dialogRef.close();
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
    this.cartUpdated.next(true);
  }

  removeFromCart(product_id: string) {
    const countCart = this.cart.length;
    this.cart.forEach((cart: CartModel, index: number) => {
      if (cart.product_id === product_id) {
        this.cart.splice(index, 1);
      }
    });
    if (this.cart.length !== countCart) {
      this.cartUpdated.next(true);
    }
  }

  updateCartQuantity(cartData: CartModel) {
    this.cart.forEach((cartItem: CartModel) => {
      if (cartItem.product_id === cartData.product_id) {
        cartItem.quentity = +cartData.quentity;
      }
    });
  }

  productIdGenerator() {
    const productId = this.randomString(16);
    if (
      this.productList.some((product: ProductModel) => {
        return product.id === productId;
      })
    ) {
      this.productIdGenerator();
    }
    return productId;
  }

  randomString(length: number) {
    const chars =
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result = '';
    for (var i = length; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }

  private initialData() {
    this.addproduct(
      new ProductModel({
        name: 'TV',
        price: 2000,
        id: this.productIdGenerator(),
      })
    );
    this.addproduct(
      new ProductModel({
        name: 'Fridge',
        price: 2000,
        id: this.productIdGenerator(),
      })
    );
    this.addproduct(
      new ProductModel({
        name: 'Dishwasher',
        price: 2000,
        id: this.productIdGenerator(),
      })
    );
    this.addproduct(
      new ProductModel({
        name: 'Washing Machine',
        price: 2000,
        id: this.productIdGenerator(),
      })
    );
  }
}
