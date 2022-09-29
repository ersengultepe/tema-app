import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { BolumModel } from '../bolum/models/bolum.model';
import { PersonelModel } from './models/personel.model';

@Component({
  selector: 'app-personel',
  templateUrl: './personel.component.html',
  styleUrls: ['./personel.component.scss']
})
export class PersonelComponent implements OnInit {

  bolumler: BolumModel[] = [];
  personels: PersonelModel[] = [];
  constructor(
    private _http: HttpClient
  ) { }

  ngOnInit(): void {
    this.bolumGetList();
    this.getList();
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

  kaydet(form: NgForm){
    if (!form.valid) {
      return;
    }

    let api = environment.api + "Personels/Add";
    this._http.post<any>(api, form.value).subscribe({
      next: (res)=> {
        form.reset();
        this.getList();
      },
      error: (err)=> console.log(err)
    })
  }

  getList(){
    let api = environment.api + "Personels/GetList";
    this._http.get<any>(api).subscribe({
      next: (res)=> {
        this.personels = res.data;
      },
      error: (err)=> console.log(err)
    })
  }

  delete(model: PersonelModel){
    let api = environment.api + "Personels/Delete";
    this._http.post<any>(api, model).subscribe({
      next: (res)=> {
        //form.reset();
        this.getList();
      },
      error: (err)=> console.log(err)
    })
  }

}
