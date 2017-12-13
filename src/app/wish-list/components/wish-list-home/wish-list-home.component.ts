import { Component, OnInit } from '@angular/core';
import {Wish} from '../../models/wish';
import {DataTableConfig} from '../../../shared-module/components/data-table/models/data-table-config';

@Component({
  selector: 'wish-list-home',
  templateUrl: './wish-list-home.component.html',
  styleUrls: ['./wish-list-home.component.css']
})
export class WishListHomeComponent implements OnInit {

  public wishes: Wish[] = [];

  // public wishesTableConfig: DataTableConfig = {
  //   cols: [
  //     {header: 'Item', field: 'item'},
  //     {header: 'Amount', field: 'amount'}
  //   ]
  // };

  constructor() { }

  ngOnInit() {
  }

  public addWish( newWishItem: Wish) {
    this.wishes = [...this.wishes, {
      ...newWishItem
    }];
  }

}
