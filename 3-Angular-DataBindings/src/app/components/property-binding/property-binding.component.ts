import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  public Name:string = 'text';
  public Password:string = 'password';
  public dhoni = '../../../assets/images/CSK.jpg';
  public air = '../../../assets/images/Prakruthi/air.jpg';
  public water = '../../../assets/images/Prakruthi/water.jpg';
  public fire = '../../../assets/images/Prakruthi/fire.jpg';
  public earth = '../../../assets/images/Prakruthi/earth 1.jpg';
  public sky = '../../../assets/images/Prakruthi/sky.jpg';
  public width:number = 400;
  public titles:string[] = ['AIR', 'WATER', 'FIRE', 'EARTH', 'SKY'];
  public btn:string = 'btn-cyan';
  constructor() { }

  ngOnInit(): void {
  }

}
