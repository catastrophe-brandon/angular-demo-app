import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Wish} from '../../models/wish';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'wish-list-form',
  templateUrl: './wish-list-form.component.html',
  styleUrls: ['./wish-list-form.component.css']
})
export class WishListFormComponent implements OnInit {

  public wishReactiveForm: FormGroup;

  @Output()
  public saveWish = new EventEmitter<Wish>();

  constructor(private fb: FormBuilder) {
    // properties below must match the formControlName in html.
    this.wishReactiveForm = this.fb.group({
      wishItemInput: '',
      wishAmountInput: 0,
    });
  }

  ngOnInit() {
  }

  submitWish() {
    // emit an event with the wish to be added
    this.saveWish.emit({
      item: this.wishReactiveForm.value.wishItemInput,
      amount: this.wishReactiveForm.value.wishAmountInput
    });
  }


  // [(ngModel)]
}
