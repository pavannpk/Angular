import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-inerpolation',
  templateUrl: './inerpolation.component.html',
  styleUrls: ['./inerpolation.component.css']
})
export class InerpolationComponent implements OnInit {
  constructor() { }

  public title = 'NPK Logo';
  public clock = 'Clock';
  public currentTime: string = new Date().toLocaleTimeString();
  public img = '../../../assets/images/GOLD LOGO.jpg';
  public Time(): string {
    return new Date().toLocaleString();
  }
  public displayCTime(): string{
    setInterval(() => {
      this.currentTime = new Date().toLocaleTimeString();
    }, 1000);
    return this.currentTime;
  }
  ngOnInit(): void {
  }

}
