import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { CartModel } from '../model/cart.model';

@Component({
  selector: 'product-list',
  templateUrl: 'product-list.component.html',
})
export class ProductListComponent {
  constructor(public commonService: CommonService) {}
}
