import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { WishListTableComponent } from './components/wish-list-table/wish-list-table.component';
import { WishListFormComponent } from './components/wish-list-form/wish-list-form.component';
import { WishListHomeComponent } from './components/wish-list-home/wish-list-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import {WishListTableComponent} from './components/wish-list-table/wish-list-table.component';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule
  ],
  declarations: [WishListFormComponent, WishListHomeComponent, WishListTableComponent],
  exports: [WishListHomeComponent]
})
export class WishListModule { }
