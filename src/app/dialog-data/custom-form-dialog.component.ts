import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService } from '../common.service';
import { ProductModel } from '../model/product.model';

@Component({
  selector: 'custom-form-dialog',
  templateUrl: 'custom-form-dialog.component.html',
})
export class CustomFormDialogComponent {
  myForm: FormGroup;

  constructor(
    public commonService: CommonService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      price: [0, Validators.required],
      fileUploader: [null],
    });
  }

  onFileInput(data: any) {}

  submitData(formGroup: FormGroup, event: Event) {
    event.preventDefault();
    if (formGroup.valid) {
      const product = new ProductModel();
      product.name = formGroup.value.name;
      product.price = formGroup.value.price;
      product.image = formGroup.value.image;
      product.id = this.commonService.productIdGenerator();
      this.commonService.addproduct(product);
    }
  }
}
