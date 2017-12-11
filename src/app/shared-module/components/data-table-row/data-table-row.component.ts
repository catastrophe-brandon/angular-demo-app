import {Component, Input, OnInit} from '@angular/core';
import {DataTableConfig} from '../data-table/models/data-table-config';

@Component({
  // we will add the attribute 'view-row'
  selector: 'tr[data-view-row]',
  templateUrl: './data-table-row.component.html',
  styleUrls: ['./data-table-row.component.css']
})
export class DataTableRowComponent implements OnInit {

  @Input()
  public config: DataTableConfig = null;

  @Input()
  public item: any;

  constructor() { }

  ngOnInit() {
  }

}
