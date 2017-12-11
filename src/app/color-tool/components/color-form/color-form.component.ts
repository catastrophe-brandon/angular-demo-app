import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import {Color} from '../../models/color';

@Component({
  selector: 'color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css']
})
export class ColorFormComponent implements OnInit {

  public colorForm: FormGroup;

  @Input()
  public buttonLabel = 'Save';


  constructor(private fb: FormBuilder) {
    // properties below must match the formControlName in html.
    this.colorForm = this.fb.group({
      colorNameInput: '',
      colorHexCodeInput: ''});
  }

  ngOnInit() {
  }

  @Output()
  submitColor = new EventEmitter<Color>();

  handleColorFormButtonClick() {
    // emit an event and pass the new color object
    this.submitColor.emit({
      name: this.colorForm.value.colorNameInput,
      hexCode: this.colorForm.value.colorHexCodeInput
    });
  }
}
