import { Component } from '@angular/core';
import { LoginService } from "../../services/login.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent {

  users: any = [];

  constructor(private loginComp: LoginService,
    private router: Router) {

    this.loginComp.getUsers().subscribe((res: any) => {
      this.users = res;
      console.log(this.users);
    })
  }

  loginFn(email, password) {
    this.users.forEach((element) => {
      if (element.email === email && element.password === password) {
        this.changeRoute();
      }
    })
  }

  changeRoute() {
    this.router.navigate(['blog']);

  }
}



