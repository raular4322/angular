import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import URL from '../assets/requestConfig';

@Injectable({
  providedIn: 'root'
})

export class RequestService {

  constructor(private http: HttpClient) { }

  loginUser(email, password) {
    return this.http.post(`${URL.baseURL}${URL.user}login`, {email,password});
  }

  registerUser(user) {
    return this.http.post(`${URL.baseURL}${URL.user}`, user)
  }

  auth(token) {
    return this.http.get(`${URL.baseURL}auth`, {headers: {'token': token}})
  }

  getUsers() {
    return this.http.get(`${URL.baseURL}${URL.user}`)
  }
}
