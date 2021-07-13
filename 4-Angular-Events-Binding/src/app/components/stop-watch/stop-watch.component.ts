import { Component, OnInit } from '@angular/core';
import set = Reflect.set;

@Component({
  selector: 'app-stop-watch',
  templateUrl: './stop-watch.component.html',
  styleUrls: ['./stop-watch.component.css']
})
export class StopWatchComponent implements OnInit {

  public timer:number = 0;
  public seconds:number = 0;
  public minutes:number = 0;
  public milliseconds:number = 0;
  public timeRunning:boolean = false;
  public timerId:number = 0;
  public Start():void{
    if (!this.timeRunning){
      this.timerId = setInterval(() => {
        this.timer++;
        this.minutes = Math.floor((this.timer/100)/60);
        this.seconds = Math.floor((this.timer/100) - (this.minutes * 60));
        this.milliseconds = Math.floor(this.timer- (this.seconds * 100) - (this.minutes * 6000));
      }, 10);
      this.timeRunning = true;
    }
  }
  public Stop():void{
    clearInterval(this.timerId);
    this.timeRunning = false;
  }
  public Reset():void{
    clearInterval(this.timerId);
    this.timer = 0;
    this.seconds = 0;
    this.milliseconds = 0;
    this.minutes = 0;
    this.timerId = 0;
    this.timeRunning = false;
  }
  public leadTime(time:any){
    return (time <= 9) ? "0" + time : time;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
