import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobbies-select',
  templateUrl: './hobbies-select.component.html',
  styleUrls: ['./hobbies-select.component.css']
})
export class HobbiesSelectComponent implements OnInit {

  public eating:boolean = false;
  public coding:boolean = false;
  public sleeping:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
