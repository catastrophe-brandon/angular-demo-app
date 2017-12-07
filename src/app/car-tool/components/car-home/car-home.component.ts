import { Component} from '@angular/core';
import {Car} from '../../models/car';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent {

  public headerText = 'Car Tool brought to you by Carl\'s Jr';
  public cars: Car[] = [
    {id: 1, make: 'Honda', model: 'Civic', year: 2001, price: 0.25, color: 'derple'},
    {id: 2, make: 'Ford', model: 'Pinto', year: 1981, price: 3.50, color: 'peuce'}
  ];

  public carTemplateForm = {
    carMakeInput: '',
    carModelInput: '',
    carYearInput: 0,
    carPriceInput: 0.00,
    carColorInput: '',
  };

  public carReactiveForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // properties below must match the formControlName in html.
    this.carReactiveForm = this.fb.group({
        carMakeInput: '',
        carModelInput: '',
        carYearInput: '',
        carPriceInput: '',
        carColorInput: '',
      });
  }

  public showTemplateForm() {
    console.log(this.carTemplateForm);
  }

  public showReactiveForm() {
    this.cars = this.cars.concat([{
      id: null,
      make: this.carReactiveForm.controls.carMakeInput.value,
      model: this.carReactiveForm.controls.carModelInput.value,
      year: this.carReactiveForm.controls.carYearInput.value,
      price: this.carReactiveForm.controls.carPriceInput.value,
      color: this.carReactiveForm.controls.carColorInput.value
    }]);
    console.log(this.carReactiveForm.value);
  }
}
