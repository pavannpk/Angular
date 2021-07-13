import { Component, OnInit } from '@angular/core';
import {Contact} from "./contact";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public selectedContact:any;
  public parentContactInfo:Contact[] = [
    {
      SNO:1,
      NAME:'NPK',
      EMAIL:'npk@gmail.com',
      AGE:23,
      ADDRESS:{
        STATE:'AP',
        PINCODE:533343
  },
  NUMBER:9898899898
    },
    {
      SNO:2,
      NAME:'PK',
      EMAIL:'pk@gmail.com',
      AGE:34,
      ADDRESS:{
        STATE:'TN',
        PINCODE:434535
      },
      NUMBER:9434343434
    },
    {
      SNO:3,
      NAME:'RK',
      EMAIL:'rk123@gmail.com',
      AGE:33,
      ADDRESS:{
        STATE:'TP',
        PINCODE:646464
      },
      NUMBER:9878689698
    },
    {
      SNO:4,
      NAME:'RAM',
      EMAIL:'rmram@gmail.com',
      AGE:14,
      ADDRESS:{
        STATE:'AP',
        PINCODE:533343
      },
      NUMBER:927482738
    },
    {
      SNO:5,
      NAME:'PK RAVI',
      EMAIL:'ravi@gmail.com',
      AGE:29,
      ADDRESS:{
        STATE:'AP',
        PINCODE:434535
      },
      NUMBER:918382738
    },
    {
      SNO:6,
      NAME:'PAVAN',
      EMAIL:'pavan@gmail.com',
      AGE:24,
      ADDRESS:{
        STATE:'AP',
        PINCODE:646464
      },
      NUMBER:9666623425
    },
    {
      SNO:7,
      NAME:'HARI',
      EMAIL:'hari234@gmail.com',
      AGE:45,
      ADDRESS:{
        STATE:'UP',
        PINCODE:424242
      },
      NUMBER:8987787878
    },
    {
      SNO:8,
      NAME:'ARJUN',
      EMAIL:'arju@gmail.com',
      AGE:25,
      ADDRESS:{
        STATE:'UK',
        PINCODE:353567
      },
      NUMBER:9089839088
    },
    {
      SNO:9,
      NAME:'HASHH',
      EMAIL:'hsh1234@gmail.com',
      AGE:19,
      ADDRESS:{
        STATE:'US',
        PINCODE:212112
      },
      NUMBER:12112121
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
