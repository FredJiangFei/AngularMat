import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cdk-observers',
  templateUrl: './cdk-observers.component.html',
  styleUrls: ['./cdk-observers.component.css']
})
export class CdkObserversComponent implements OnInit {
  title = 'Title';
  constructor() { }

  ngOnInit() {}

  changeTitle() {
    this.title += ' changed';
  }
}
