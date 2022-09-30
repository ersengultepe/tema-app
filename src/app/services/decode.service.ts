import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root'
})
export class DecodeService {
 
  _jwt : JwtHelperService = new JwtHelperService();
  decode:any;
  constructor() {
    this.decode = this._jwt.decodeToken(localStorage.getItem("token"))
   }

  getTokenDecode(){
    let decode = this._jwt.decodeToken(localStorage.getItem("token"))
    console.log(decode);
    
  }


  getName(){
    let decode = this._jwt.decodeToken(localStorage.getItem("token"))
    let userName = Object.keys(decode).filter(p=> p.endsWith("/name"))[0];
    return decode[userName]
  }

  getRoles(){
    let decode = this._jwt.decodeToken(localStorage.getItem("token"))
    let roles = Object.keys(decode).filter(p=> p.endsWith("/role"))[0];
    return decode[roles]
  }
}
