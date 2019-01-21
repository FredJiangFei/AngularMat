import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-observer-title',
  templateUrl: './observer-title.component.html',
  styleUrls: ['./observer-title.component.css']
})
export class ObserverTitleComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  projectContentChanged(e) {
    console.log(e);
  }
}
