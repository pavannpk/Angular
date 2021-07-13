import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-username',
  templateUrl: './change-username.component.html',
  styleUrls: ['./change-username.component.css']
})
export class ChangeUsernameComponent implements OnInit {

  public username:string = "";
  public ownUsername:string = "";
  public name:string = "text";
  public form:string = "form-control";
  public change(elem: HTMLInputElement){
    this.username = elem.value;
  }
  public Own(value: string){
    this.ownUsername = value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
