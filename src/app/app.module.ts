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

@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    NavbarComponent,
    MainSidebarComponent,
    FooterComponent,
    ControlSidebarComponent,
    BlankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
