import { Component, OnInit } from '@angular/core';
import {Register} from "./register";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  /*better way to create an interface because in future there are many fields*/
  /*public username:string = "";
  public email:string = "";
  public password:string = "";*/
  public register:Register = {
    userName:'',
    email:'',
    password:''
  };
  public submitForm():void{
    console.log(this.register)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
