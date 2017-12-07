import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarHomeComponent } from './components/car-home/car-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [CarHomeComponent],
  exports: [CarHomeComponent]
})
export class CarToolModule { }
