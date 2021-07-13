import { Component, OnInit } from '@angular/core';
import {StocksService} from "../../../services/stocks.service";
import {IStocks} from "../../../models/IStocks";

@Component({
  selector: 'app-stocks-list',
  templateUrl: './stocks-list.component.html',
  styleUrls: ['./stocks-list.component.css']
})
export class StocksListComponent implements OnInit {

  public stockList:IStocks[] = [];
  public errorMessage:string = "";
  constructor(private stockService:StocksService) { }

  ngOnInit(): void {
    this.stockService.getAllStocks().subscribe((data) => {
      this.stockList = data
    }, (err) => {
      this.errorMessage = err;
    })
  }

}
