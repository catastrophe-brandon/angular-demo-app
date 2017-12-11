import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarHomeComponent } from './components/car-home/car-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToolHeaderComponent } from './components/tool-header/tool-header.component';
import { TableComponentComponent } from './components/table-component/table-component.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
  ],
  declarations: [CarHomeComponent, ToolHeaderComponent, TableComponentComponent],
  exports: [CarHomeComponent],
})
export class CarToolModule { }
