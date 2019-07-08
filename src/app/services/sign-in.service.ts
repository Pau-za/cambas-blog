import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { throwError, Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  user: Observable <any>;

  constructor(private http: HttpClient) {   }

  getUsers() {
    console.log(this.http.get('https://cors-anywhere.herokuapp.com/http://3.14.129.214:3000/users'));
    return this.http.get('https://cors-anywhere.herokuapp.com/http://3.14.129.214:3000/users');
  }


}
