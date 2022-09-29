import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { MainSidebarComponent } from './components/layouts/main-sidebar/main-sidebar.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { ControlSidebarComponent } from './components/layouts/control-sidebar/control-sidebar.component';
import { BlankComponent } from './components/blank/blank.component';
import { LoginComponent } from './components/auth/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BolumComponent } from './components/bolum/bolum.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    NavbarComponent,
    MainSidebarComponent,
    FooterComponent,
    ControlSidebarComponent,
    BlankComponent,
    LoginComponent,
    BolumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
