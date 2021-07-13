import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { EmployeesDetailsComponent } from './components/employees/employees-details/employees-details.component';
import { StocksDetailsComponent } from './components/stocks/stocks-details/stocks-details.component';
import { StocksListComponent } from './components/stocks/stocks-list/stocks-list.component';
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    EmployeesListComponent,
    EmployeesDetailsComponent,
    StocksDetailsComponent,
    StocksListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
