import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarDetailComponent } from './car-detail/car-detail.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { FormsModule } from '@angular/forms';

import 'hammerjs';
import { MyFormComponent } from './my-form/my-form.component';
import { MatInputModule, MatButtonModule } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarDetailComponent,
    MyFormComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
