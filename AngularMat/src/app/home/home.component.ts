import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  darkTheme = false;
  dir = 'ltr';
  private mediaMatcher = matchMedia(`(max-width: 720px)`);

  constructor(overlayContainer: OverlayContainer) {
    // overlayContainer.getContainerElement().classList.add('unicorn-dark-theme');
  }

  ngOnInit() {
  }

  toggleTheme() {
    this.darkTheme = !this.darkTheme;
  }

  toggleDir() {
    this.dir = this.dir === 'ltr' ? 'rtl' : 'ltr';
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }
}
