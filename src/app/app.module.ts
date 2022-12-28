import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CustomFormDialogComponent } from './dialog-data/custom-form-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatToolbarModule,
  ],
  declarations: [AppComponent, HelloComponent, CustomFormDialogComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
