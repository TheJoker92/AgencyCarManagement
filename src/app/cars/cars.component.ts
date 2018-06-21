import { Component, OnInit } from '@angular/core';
import { Cars } from '../car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

    car: Car = {
    id: 1,
    name: 'Ferrari'
  };


  constructor() { }

  ngOnInit() {
  }

}
