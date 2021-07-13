import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.css']
})
export class ThemeSelectorComponent implements OnInit {

  public theme:boolean = false;
  public img:string = '../../assets/images/womb.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
