    import { Component, OnInit, Inject } from '@angular/core';

    import { Car } from '../car';
    import { CARS } from '../mock-cars';
    import { CarDetailComponent} from '../car-detail/car-detail.component';
     
    @Component({
      selector: 'app-cars',
      templateUrl: './cars.component.html',
      styleUrls: ['./cars.component.css']
    })
    export class CarsComponent {
     
      cars = CARS;
     
      selectedCar: Car;
     
     
  constructor() {}
     
      ngOnInit() {
      }
     
      onSelect(car: Car): void {
        this.selectedCar = car;

      }

    }
