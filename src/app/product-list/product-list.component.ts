import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'product-list',
  templateUrl: 'product-list.component.html',
})
export class ProductListComponent {
  constructor(public commonService: CommonService) {}
}
