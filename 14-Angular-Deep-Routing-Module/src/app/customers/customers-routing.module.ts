import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './customers.component';
import {CustomerDetailsComponent} from "./components/customer-details/customer-details.component";

const routes: Routes = [
  { path: '', component: CustomersComponent },
  { path: ':id', component: CustomerDetailsComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
