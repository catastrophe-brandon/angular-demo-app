import {Component, Input, OnInit} from '@angular/core';
import {DataTableConfig} from './models/data-table-config';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  @Input()
  public config: DataTableConfig = null;

  @Input()
  public data: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
