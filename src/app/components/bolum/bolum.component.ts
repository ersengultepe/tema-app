import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DecodeService } from 'src/app/services/decode.service';
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
  roles: string[] = [];
  isBolumlerActive = false;

  constructor(
    private _http: HttpClient,
    private _decode: DecodeService,
    private _router: Router
  ) { 
    this.roles = _decode.getRoles();
  }

  ngOnInit(): void {
    this.getList();
    if (!this.roles.includes("Admin2")) {
      this._router.navigateByUrl("/")
    }
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
