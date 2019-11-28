import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorized',
  templateUrl: './authorized.component.html',
  styleUrls: ['./authorized.component.css']
})
export class AuthorizedComponent implements OnInit {

  constructor(private _http: RequestService, private router: Router) { }

  users;

  ngOnInit() {
    this._http.auth(localStorage.getItem("token"))
      .subscribe((response) => {
        this._http.getUsers().subscribe((response) => {
          console.log(response)
          this.users = response;
        }, (err) => {
          alert(err.error.message);
        })
      }, (err) => {
        this.router.navigate(['login']);
      })
  }
}
