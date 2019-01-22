import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css']
})
export class ScrollComponent implements OnInit {
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

  constructor() { }

  ngOnInit() {
  }

}
