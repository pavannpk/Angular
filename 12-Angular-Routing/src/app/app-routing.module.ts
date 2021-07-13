import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {EmployeesListComponent} from "./components/employees/employees-list/employees-list.component";
import {StocksListComponent} from "./components/stocks/stocks-list/stocks-list.component";
import {AboutComponent} from "./components/about/about.component";
import {EmployeesDetailsComponent} from "./components/employees/employees-details/employees-details.component";
import {StocksDetailsComponent} from "./components/stocks/stocks-details/stocks-details.component";

const routes: Routes = [
  //all routing info
  {path : '', component: HomeComponent },
  {path : 'employees', component: EmployeesListComponent },
  {path : 'employees/:id', component: EmployeesDetailsComponent },
  {path : 'stocks/:id', component: StocksDetailsComponent },
  {path : 'stocks', component: StocksListComponent },
  {path : 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
