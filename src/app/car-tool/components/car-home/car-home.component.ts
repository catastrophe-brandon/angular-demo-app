import { Component} from '@angular/core';
import {Car} from '../../models/car';


@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent {

  constructor() { }

  public headerText = 'Car Tool brought to you by Carl\'s Jr';
  public cars: Car[] = [
    {id: 1, make: 'Honda', model: 'Civic', year: 2001, price: 0.25},
    {id: 2, make: 'Ford', model: 'Pinto', year: 1981, price: 3.50}
  ];
}
