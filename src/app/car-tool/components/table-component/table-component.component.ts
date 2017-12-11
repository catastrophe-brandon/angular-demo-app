import { Component, OnInit, Input } from '@angular/core';
import {Car} from '../../models/car';

@Component({
  selector: 'table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit {

  @Input()
  public cars: Car[] = [];

  constructor() { }

  ngOnInit() {
  }

}
