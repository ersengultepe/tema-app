import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
