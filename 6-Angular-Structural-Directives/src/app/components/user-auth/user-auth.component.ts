import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {

  public isLoggedIn:boolean = false;
  public firstLoad:boolean = true;
  public logIn():void{
    this.isLoggedIn = true;
    this.firstLoad = false;
  }
  public logOut():void{
    this.isLoggedIn = false;
    this.firstLoad = false;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
