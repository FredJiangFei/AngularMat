import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logining: boolean;
  user = {
    username: 'jiangfei@qq.com',
    password: '123123',
  };

  constructor(private router: Router) {

  }
  ngOnInit() { }

  login() {
    this.router.navigate(['/']);
  }
}
