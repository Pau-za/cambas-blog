import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // usersData: any[] = [];

  constructor(private http: HttpClient,
    private loginServ: LoginService) {

  }

  getUsers() {
    console.log(this.http.get('https://cors-anywhere.herokuapp.com/http://3.14.129.214:3000/users'));
    return this.http.get('https://cors-anywhere.herokuapp.com/http://3.14.129.214:3000/users');

  }


}