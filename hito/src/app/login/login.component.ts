import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RequestService } from '../request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _http:RequestService, private router: Router) { }

  model = new User();

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this._http.loginUser(this.model.email, this.model.password)
      .subscribe((response: {
        token: string
      }) => {
        this.router.navigate(['authorized']);
        localStorage.setItem("token", response.token);
      }, (err) => {
        alert(err.error.message);
      })
  }

}
