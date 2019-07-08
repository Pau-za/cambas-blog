import { Component, OnInit } from '@angular/core';
import { SignInService } from "../../services/sign-in.service";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html'
})
export class SinginComponent implements OnInit {

  users: any = {};
  user: any = {
    firstname: null,
    lastname: null,
    email: null,
    password: null,
    id: null
  };

  constructor(private signInServ: SignInService,
    private router: Router, private http: HttpClient) {

    this.signInServ.getUsers().subscribe((res: any) => {
      this.users = res;
    })
  }

  newUser(firstName, lastName, email, password) {
    this.user.firstname = firstName;
    this.user.lastname = lastName;
    this.user.email = email;
    this.user.password = password;
    this.user.id = this.users.length + 1;
    this.addUser(this.user);
  }

  addUser(user: any) {
    this.http.post('https://cors-anywhere.herokuapp.com/http://3.14.129.214:3000/users', user)
      .subscribe((user => user));
    this.changeRoute();
  }

  changeRoute() {
    this.router.navigate(['blog']);
  }

  ngOnInit() {
  }

}
