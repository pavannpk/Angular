import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  @Input() childContactInfo:any;
  @Output() sendData = new EventEmitter();

  //when we click on each row. send data to the parent
  public clickContact(info: any):void{
    this.sendData.emit(info); //send data to the parent
  }
  constructor() { }

  ngOnInit(): void {
  }

}
