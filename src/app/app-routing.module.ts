import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './components/auth/auth.guard';
import { LoginComponent } from './components/auth/login/login.component';
import { RoleGuard } from './components/auth/role.guard';
import { BlankComponent } from './components/blank/blank.component';
import { LayoutsComponent } from './components/layouts/layouts.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutsComponent,
    canActivateChild: [AuthGuard, RoleGuard],
    children: [
      {
        path: "",
        component: BlankComponent,        
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
