import { Component, OnInit, Input } from '@angular/core';
import { Wish } from '../../models/wish';

@Component({
  selector: 'wish-list-table',
  templateUrl: './wish-list-table.component.html',
  styleUrls: ['./wish-list-table.component.css']
})
export class WishListTableComponent implements OnInit {

  @Input()
  public wishes: Wish[];

  constructor() { }

  ngOnInit() {
  }

}
