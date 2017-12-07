import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorHomeComponent } from './color-home/color-home.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ColorHomeComponent],
  // Needed to expose the component outside the module
  exports: [ColorHomeComponent]
})
export class ColorToolModule { }

