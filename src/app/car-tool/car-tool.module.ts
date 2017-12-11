import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarHomeComponent } from './components/car-home/car-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToolHeaderComponent } from '../shared-module/tool-header/tool-header.component';
import { TableComponentComponent } from './components/table-component/table-component.component';
import { PizzaComponentComponent } from './pizza-component/pizza-component.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, SharedModuleModule,
  ],
  declarations: [CarHomeComponent, TableComponentComponent, PizzaComponentComponent],
  exports: [CarHomeComponent],
})
export class CarToolModule { }
