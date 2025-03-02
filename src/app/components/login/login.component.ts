import { Component } from '@angular/core';
import {UserService} from "../../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  existUser = true;
  username: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {
  }

  login() {
    if (this.userService.login(this.username, this.password)) {
      this.router.navigate(['/buscador']);
    } else {
      this.existUser = false;
    }
  }
}
