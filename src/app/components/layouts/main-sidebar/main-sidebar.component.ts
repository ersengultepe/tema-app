import { Component, OnInit } from '@angular/core';
import { DecodeService } from 'src/app/services/decode.service';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.scss']
})
export class MainSidebarComponent implements OnInit {

  roles: string[] = [];
  isBolumlerActive = false;

  constructor(
    private _decode: DecodeService
  ) { 
    this.roles = _decode.getRoles();
  }

  ngOnInit(): void {
    if (this.roles.includes("Admin2")) {
      this.isBolumlerActive = true;
    }
  }

  

}
