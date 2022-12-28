import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'shopping-cart',
  templateUrl: 'shopping-cart.component.html',
})
export class ShoppingCartComponent {
  constructor(public commonService: CommonService) {}
}
