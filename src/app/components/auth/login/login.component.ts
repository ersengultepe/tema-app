import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoginModel } from './models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginModel: LoginModel = new LoginModel();

  constructor(
    private _auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  signIn(){
    this._auth.login(this.loginModel).subscribe({
      next: (value)=> {
        console.log(value);        
      },
      error: (err)=> {
        console.log(err);
        
      }
    })
    
  }

}
