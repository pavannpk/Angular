import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() ChildMessage:string = "";
  public ChildWishMessage:string ="";
  @Output() sendData = new EventEmitter();
  public onInput():void{
    this.sendData.emit(this.ChildWishMessage)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
