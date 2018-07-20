import { Component, OnInit } from '@angular/core';
import { loginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [loginService]
})
export class LoginComponent implements OnInit {

  constructor(private login: loginService, private route: Router) {}

  ngOnInit() {
  }

  onSubmit(formLogin) {
    this.login.postLogin(formLogin.value)
    .then(result => {
      localStorage.setItem('token', result.token);
      this.route.navigate(['/']);
    })
    .catch(err => console.log(err));
  }

}
