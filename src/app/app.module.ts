import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { SearchEmpComponent } from './search-emp/search-emp.component'

const myRoute:Routes=[
  {
    path:"",
    component:ViewEmpComponent
  },
  {
    path:"add",
    component:AddEmpComponent
  },
  {
    path:"se",
    component:SearchEmpComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddEmpComponent,
    ViewEmpComponent,
    NavbarComponent,
    SearchComponent,
    SearchEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
