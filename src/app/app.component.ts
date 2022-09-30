import { Component } from '@angular/core';
import { DecodeService } from './services/decode.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>' 
})
export class AppComponent {

  constructor(
    private _decode: DecodeService
  ){
    this._decode.getTokenDecode();
    console.log(this._decode.getName());
    console.log(this._decode.getRoles());
    
  }
  title = 'tema-app';
}
