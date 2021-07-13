import { Component, OnInit } from '@angular/core';
import {StocksService} from "./services/stocks.service";
import {IStocks} from "./models/IStocks";

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {

  public stockList:IStocks[] = [];
  public errorMsg:string = "";
  constructor(private stockService: StocksService) { }

  ngOnInit(): void {
    this.stockService.getAllStocks().subscribe((data) => {
      this.stockList = data;
    }, (err) => {
      this.errorMsg = err;
    })
  }

}
