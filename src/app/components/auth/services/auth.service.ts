import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { LoginModel } from "../login/models/login.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api: string = "https://angularegitimleriapi.ecnorow.com/api/"

  constructor(
    private _http: HttpClient
  ) { }

  login(model: LoginModel){
    let api= this.api + "PersonelAuth/login";
    return this._http.post<any>(api,model);
  }
}
