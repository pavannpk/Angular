import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  public Name:string = 'text';
  public msg:string = 'Hello';
  public gdMg():void{
    this.msg = 'Good Morning';
  }
  public gdAn():void{
    this.msg = 'Good Afternoon';
  }
  public gdEn():void{
    this.msg = 'Good Evening';
  }

  /*counting*/
  public counting:number = 0;
  public interval:number = 0;
  public timeRunning:boolean = false;
  public start():void{
    if (!this.timeRunning){
      this.interval =  setInterval(() => {
        this.counting++;
      }, 50);
    }
    this.timeRunning = true;
  }
  public stop():void{
    clearInterval(this.interval);
    this.timeRunning = false;
  }
  public reset():void{
    this.counting = 0;
    if (this.counting == 0){
      clearInterval(this.interval);
    }
   this.timeRunning = false;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
