import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-cdk-layout',
  templateUrl: './cdk-layout.component.html',
  styleUrls: ['./cdk-layout.component.css']
})
export class CdkLayoutComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      if (result.matches) {
        this.activateHandsetLayout();
      }
    });

    breakpointObserver.observe([
      Breakpoints.Tablet
    ]).subscribe(result => {
      if (result.matches) {
        this.activateTabletLayout();
      }
    });

    this.breakpointObserver
    .observe([
      '(orientation: portrait)',
      '(orientation: landscape)',
    ])
    .subscribe(result => {
      this.updateMyLayoutForOrientationChange();
    });
  }

  ngOnInit() {
  }

  updateMyLayoutForOrientationChange() {
    console.log('layout orientation change');
  }

  activateHandsetLayout() {
    console.log('activate handset layout');
  }

  activateTabletLayout() {
    console.log('activate tablet layout');
  }

}
