import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import URL from '../assets/requestConfig';

@Injectable({
  providedIn: 'root'
})

export class RequestService {

  constructor(private http: HttpClient) { }

  loginUser(name, password) {
    return this.http.post(`${URL.baseURL}${URL.loginURL}${name}`, {password});
  }  
}
