import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './components/data-table/data-table.component';
import { ToolHeaderComponent } from './components/tool-header/tool-header.component';
import { DataTableConfig } from './components/data-table/models/data-table-config';
import { DataColumnConfig } from './components/data-table/models/data-column-config';
import { DataTableRowComponent } from './components/data-table-row/data-table-row.component';
export { DataTableConfig, DataColumnConfig };

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DataTableComponent, ToolHeaderComponent, DataTableRowComponent],
  exports: [ToolHeaderComponent, DataTableComponent]
})
export class SharedModuleModule { }
