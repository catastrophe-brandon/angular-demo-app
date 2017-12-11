import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { Color } from '../../models/color';
import {DataTableConfig} from '../../../shared-module/components/data-table/models/data-table-config';
import {DataColumnConfig} from '../../../shared-module/components/data-table/models/data-column-config';

// Decorators are typescript
// selector - valid CSS selector that allows for finding part of the DOM in the HTML fragment.
// TODO: Become familiar with CSS selector rules.

// Components are directives that take an element and apply a template, specified by templateUrl.
// Angular will freak out if you try to apply different components to the same element.
// Components are the primary building blocks of UI
// - Logic
// - Data
// - Template
//    - Templates can reference other Components
//
// styleUrls:
//   - Styles can be specific to a component.
//   - External css files or inline styles are supported
//   - Ahead of time compilation will follow URLs at dev time.

@Component({
  selector: 'app-color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})

// OnInit is typescript, not part of JS.
export class ColorHomeComponent {

  // lifecycle function, hooks into Angular's lifecycle mechanism
  // ngOnInit() {
  // }

  // == Side Notes ==
  // p. 39 in the book shows the AOT process
  // Comparing compilers
  // Angular 1 - 5.6.
  // Angular 2 - 2.7.
  // Angular 2 revised = 1.5

  // typescript, no access modifiers in JS.
  // JS does not allow data properties.

  public colors: Color[] = [
    {id: 1, name: 'red', hexCode: '#FF0000'},
    {id: 2, name: 'blue', hexCode: '#0000FF'}
  ];

  public colorTemplateForm = {
    colorNameInput: '',
    colorHexCodeInput: '',
  };

  public colorReactiveForm: FormGroup;
  public colorTableConfig: DataTableConfig = {
    cols: [
      {header: 'Name', field: 'name'},
      {header: 'HexCode', field: 'hexCode'}
    ]
  };

  //
  // 'fb' is private because: it automagically makes fb part of the instance.
  // This is called "dependency injection".
  //
  constructor(private fb: FormBuilder) {
    // properties below must match the formControlName in html.
    this.colorReactiveForm = this.fb.group({
      colorNameInput: '',
      colorHexCodeInput: ''});
  }

  public showTemplateForm() {
    console.log(this.colorTemplateForm);
  }

  public showReactiveForm() {
    console.log(this.colorReactiveForm.value);
  }

  // dependency injection for reactive form usage

}
