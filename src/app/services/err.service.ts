import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrService {

  constructor() { }

  errorHandler(error: HttpErrorResponse){
    if (error.status == 400) {
      console.log(error.error);
    }else{
      console.log(error);
      
    }
  }
}
