import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BolumModel } from './models/bolum.model';

@Component({
  selector: 'app-bolum',
  templateUrl: './bolum.component.html',
  styleUrls: ['./bolum.component.scss']
})
export class BolumComponent implements OnInit {

  bolum: BolumModel = new BolumModel();
  
  constructor(
    private _http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  kaydet(){
    let api = "";
    this._http.post<any>(api, this.bolum).subscribe({
      next: (res)=> console.log(res),
      error: (err)=> console.log(err)
    })
  }
}
