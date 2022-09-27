import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoginModel } from './models/login.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginModel: LoginModel = new LoginModel();
  isLoading = false;
  
  constructor(
    private _auth: AuthService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  signIn(){
    this.isLoading = true;
    this._auth.login(this.loginModel).subscribe({
      next: (value)=> { 
          //localStorage.setItem("token", JSON.stringify(this.tokenModel))
        localStorage.setItem("token", value.data.accessToken);
        //this._router.navigate(["/"]);
        this._router.navigateByUrl("/");
      },
      error: (err)=> {
        this.isLoading = false;
        console.log(err);        
      }
    })
    
  }

}
