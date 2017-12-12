import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  message = 'A message of hope, love, and kindness';

  constructor() { }

  ngOnInit() {
  }

  // run the doIt function when a button is clicked in the child
  doIt(num) {
    console.log('did it', num);
  }
}
