import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StocksComponent } from './stocks.component';
import {StockListComponent} from "./stock-list/stock-list.component";
import {StockDetailsComponent} from "./stock-details/stock-details.component";

const routes: Routes = [
  { path: '', component: StocksComponent },
  { path: 'stock-list', component: StockListComponent },
  { path: 'stock-details', component: StockDetailsComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StocksRoutingModule { }
