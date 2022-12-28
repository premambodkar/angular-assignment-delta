import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { CartModel } from '../model/cart.model';
import { ProductModel } from '../model/product.model';
import { ShoppingBagModel } from '../model/shopping-bag.model';

@Component({
  selector: 'shopping-cart',
  templateUrl: 'shopping-cart.component.html',
})
export class ShoppingCartComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'quentity',
    'price_details',
    'total',
    'action',
  ];
  dataSource!: any;
  tableData: ShoppingBagModel[] = [];

  constructor(public commonService: CommonService) {}

  ngOnInit() {
    this.commonService._cartUpdated.subscribe(() => {
      this.buildCart();
    });
  }

  buildCart() {
    this.commonService.cart.forEach((cart: CartModel) => {
      const data = new ShoppingBagModel();
      const product: ProductModel = this.commonService.productList.find(
        (item: ProductModel) => {
          return item.id === cart.product_id;
        }
      );
      data.productName = product.id;
      data.price = product.price;
      data.quentity = cart.quentity;
      data.total = +cart.quentity * +product.price;
      this.tableData.push(data);
    });
  }
}
