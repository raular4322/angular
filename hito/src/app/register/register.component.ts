import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RequestService } from '../request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private _http:RequestService, private router: Router) { }

  model = new User();

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log(this.model)
    this._http.registerUser(this.model)
      .subscribe((response: {
        token: string
      }) => {
        console.log(response)
        localStorage.setItem("token", response.token);
        this.router.navigate(['authorized']);
      }, (err) => {
        console.log(err)
        alert(err.error.error.message);
      })
  }

}
