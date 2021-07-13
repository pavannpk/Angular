import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference-variable',
  templateUrl: './template-reference-variable.component.html',
  styleUrls: ['./template-reference-variable.component.css']
})
export class TemplateReferenceVariableComponent implements OnInit {

  public greetings:string = '';
  public updateText(elem:HTMLParagraphElement):void{
    this.greetings = elem.innerText;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
