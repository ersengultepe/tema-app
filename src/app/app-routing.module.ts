import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { BlankComponent } from './components/blank/blank.component';
import { LayoutsComponent } from './components/layouts/layouts.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutsComponent,
    children: [
      {
        path: "",
        component: BlankComponent 
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
