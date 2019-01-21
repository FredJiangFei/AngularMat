import { Component, OnInit } from '@angular/core';
import {FocusOrigin} from '@angular/cdk/a11y';
import {ChangeDetectorRef, NgZone} from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  elementOrigin = this.formatOrigin(null);
  subtreeOrigin = this.formatOrigin(null);

  constructor(private ngZone: NgZone, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
  }

  formatOrigin(origin: FocusOrigin): string {
    return origin ? origin + ' focused' : 'blurred';
  }

  markForCheck() {
    this.ngZone.run(() => this.cdr.markForCheck());
  }
}
