import { Injectable } from '@angular/core';
import { CartModel } from './cart.model';
import { ProductModel } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  productList: ProductModel[] = [];
  cart: CartModel[] = [];
  constructor() {}

  addproduct() {}

  addToCart() {}

  updateCartQuentity() {}
}
