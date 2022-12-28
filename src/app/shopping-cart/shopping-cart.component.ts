import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'shopping-cart',
  templateUrl: 'shopping-cart.component.html',
})
export class ShoppingCartComponent {
  displayedColumns: string[] = [
    'name',
    'quentity',
    'price_details',
    'total',
    'action',
  ];
  dataSource!: any;
  constructor(public commonService: CommonService) {}
}
