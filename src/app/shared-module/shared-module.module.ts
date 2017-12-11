import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table/data-table.component';
import {ToolHeaderComponent} from './tool-header/tool-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DataTableComponent, ToolHeaderComponent],
  exports: [ToolHeaderComponent]
})
export class SharedModuleModule { }
