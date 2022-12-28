import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService } from '../common.service';

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

  submitData(form: FormGroup) {
    console.log(form);
  }
}
