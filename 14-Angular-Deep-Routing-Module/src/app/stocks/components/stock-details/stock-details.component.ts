import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {StocksService} from "../../services/stocks.service";
import {IStocks} from "../../models/IStocks";

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {

  public stockID:any;
  // @ts-ignore
  public selectedStock:IStocks;
  public errorMSG:string = "";
  constructor(private activatedRoute: ActivatedRoute, private stockService:StocksService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.stockID = Number(param.get('id'));
    })

    this.stockService.getAllStocks().subscribe((data) => {
      // @ts-ignore
      this.selectedStock = data.find((stock) => {
        return stock.id === this.stockID;
      })
    }, (err) => {
      this.errorMSG = err;
    })  }

}
