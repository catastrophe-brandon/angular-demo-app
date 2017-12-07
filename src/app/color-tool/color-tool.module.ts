import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorHomeComponent } from './components/color-home/color-home.component';


@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule
  ],
  declarations: [ColorHomeComponent],
  // Needed to expose the component outside the module
  exports: [ColorHomeComponent]
})
export class ColorToolModule { }

