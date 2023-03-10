import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CustomFormDialogComponent } from './dialog-data/custom-form-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductListComponent } from './product-list/product-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { QuentityInputComponent } from './product-list/quentity-input/quentity-input.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    CommonModule,
    MatFormFieldModule,
    MatToolbarModule,
  ],
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    ProductListComponent,
    QuentityInputComponent,
    CustomFormDialogComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
