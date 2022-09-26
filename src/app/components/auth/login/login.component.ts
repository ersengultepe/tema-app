import { Component, OnInit } from '@angular/core';
import { LoginModel } from './models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginModel: LoginModel = new LoginModel();

  constructor() { }

  ngOnInit(): void {
  }

  signIn(){
    console.log(this.loginModel);
    
  }

}
