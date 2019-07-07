import { Component } from '@angular/core';
import { LoginService } from "../../services/login.service";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent {
  
  users: any = [];

  constructor(private loginComp: LoginService) {
    this.loginComp.getUsers().subscribe((res:any) => {
      this.users = res;
      console.log(this.users);
    })
   }
}



