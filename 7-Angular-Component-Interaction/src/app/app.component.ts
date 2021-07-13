import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
  public wishMessage:string = "";
  public student:any = {
    name: 'NPK',
    age: 23,
    designation: 'UI'
  }
}
