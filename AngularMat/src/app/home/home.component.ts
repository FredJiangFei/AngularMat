import { Component, OnInit, ViewChild, NgZone } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  darkTheme = false;
  dir = 'ltr';
  private mediaMatcher = matchMedia(`(max-width: 720px)`);

  constructor() {
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
