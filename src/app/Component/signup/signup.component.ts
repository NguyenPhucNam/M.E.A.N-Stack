import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [SignupService]
})
export class SignupComponent implements OnInit {

  constructor(private signup: SignupService, private route: Router) {}

  ngOnInit() {
  }

  onSubmit(formSignUp) {
    this.signup.postSignup(formSignUp.value)
    .then(result => {
      console.log(result.message);
      this.route.navigate(['/tai-khoan/dang-nhap']);
    })
    .catch(err => console.log(err));
  }

}
