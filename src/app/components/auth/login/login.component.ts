import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoginModel } from './models/login.model';
import { TokenModel } from './models/token.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginModel: LoginModel = new LoginModel();
  tokenModel: TokenModel = new TokenModel();
  constructor(
    private _auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  signIn(){
    this._auth.login(this.loginModel).subscribe({
      next: (value)=> {
        this.tokenModel = value.data;   
        localStorage.setItem("token", JSON.stringify(this.tokenModel))
        localStorage.setItem("token2", this.tokenModel.accessToken)
          
      },
      error: (err)=> {
        console.log(err);
        
      }
    })
    
  }

}
