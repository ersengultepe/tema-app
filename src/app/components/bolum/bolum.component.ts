import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BolumModel } from './models/bolum.model';

@Component({
  selector: 'app-bolum',
  templateUrl: './bolum.component.html',
  styleUrls: ['./bolum.component.scss']
})
export class BolumComponent implements OnInit {

  bolum: BolumModel = new BolumModel();
  list: BolumModel[] = [];
  constructor(
    private _http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  kaydet(){
    let api = environment.api + "PersonelBolums/Add";
    this._http.post<any>(api, this.bolum).subscribe({
      next: (res)=> {
        this.bolum = new BolumModel();
        this.getList();
        //console.log(res)
      },
      error: (err)=> console.log(err)
    })
  }


  getList(){
    let api = environment.api + "PersonelBolums/GetList";
    this._http.get<any>(api).subscribe({
      next: (res)=> {
        this.list = res.data;
      },
      error: (err)=> console.log(err)
    })
  }

  delete(model: BolumModel){
    let api = environment.api + "PersonelBolums/Delete";
    this._http.post<any>(api, model).subscribe({
      next: (res)=> {        
        this.getList();
        //console.log(res)
      },
      error: (err)=> console.log(err)
    })
  }
}
