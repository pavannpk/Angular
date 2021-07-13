import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input() childStudent:any;
  public msg:string = "This msgs from child(StudentComponent)";
  @Output() sendData = new EventEmitter;
  public sendToParent():void{
    this.sendData.emit(this.msg);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
