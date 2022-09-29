import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BolumModel } from '../bolum/models/bolum.model';

@Component({
  selector: 'app-personel',
  templateUrl: './personel.component.html',
  styleUrls: ['./personel.component.scss']
})
export class PersonelComponent implements OnInit {

  bolumler: BolumModel[] = [];
  constructor(
    private _http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  bolumGetList(){
    let api = environment.api + "PersonelBolums/GetList";
    this._http.get<any>(api).subscribe({
      next: (res)=> {
        this.bolumler = res.data;
      },
      error: (err)=> console.log(err)
    })
  }

}
