import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorHomeComponent } from './components/color-home/color-home.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { ColorFormComponent } from './components/color-form/color-form.component';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule, SharedModuleModule
  ],
  declarations: [ColorHomeComponent, ColorFormComponent],
  // Needed to expose the component outside the module
  exports: [ColorHomeComponent]
})
export class ColorToolModule { }

