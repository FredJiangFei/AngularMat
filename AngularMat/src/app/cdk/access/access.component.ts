import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { FocusOrigin } from '@angular/cdk/a11y';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})

export class AccessComponent implements OnInit {
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
