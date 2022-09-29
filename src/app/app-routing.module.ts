import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './components/auth/guards/auth.guard';
import { LoginComponent } from './components/auth/login/login.component';
import { BlankComponent } from './components/blank/blank.component';
import { BolumComponent } from './components/bolum/bolum.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { PersonelComponent } from './components/personel/personel.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutsComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: "",
        component: BlankComponent,        
      },
      {
        path: "bolum",
        component: BolumComponent,        
      },
      {
        path: "personel",
        component: PersonelComponent,        
      }
    ]
  },
  {
    path: "login",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
