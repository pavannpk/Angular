import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public user:any = {
    name: '',
    email: '',
    number: '',
    message: ''
  };
  constructor() { }

  ngOnInit(): void {
  }

  contactSubmit(){
    console.log(this.user);
  }
}
