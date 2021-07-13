import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {StocksService} from "../../../services/stocks.service";
import {IEmployee} from "../../../models/IEmployee";
import {IStocks} from "../../../models/IStocks";

@Component({
  selector: 'app-stocks-details',
  templateUrl: './stocks-details.component.html',
  styleUrls: ['./stocks-details.component.css']
})
export class StocksDetailsComponent implements OnInit {

  // @ts-ignore
  public selectedStocks:IStocks;
  public errorMsg:string = "";
  public stocksID:any;
  constructor(private activatedRoute: ActivatedRoute, private stockService:StocksService) { }

  ngOnInit(): void {
    //for getting the id
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.stocksID = Number(param.get('id'));
    });


    this.stockService.getAllStocks().subscribe((data) => {
      // @ts-ignore
      this.selectedStocks = data.find((employee) => {
        return employee.id === this.stocksID;
      })
    }, (err) => {
      this.errorMsg = err;
    })
  }

}
