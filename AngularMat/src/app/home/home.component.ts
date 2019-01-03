import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  darkTheme = false;
  constructor() { }

  ngOnInit() {
  }

  toggleTheme() {
    this.darkTheme = !this.darkTheme;
  }
}
