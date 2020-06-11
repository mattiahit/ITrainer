import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnChanges {

  @Input() timeDelay: number;
  interval: any;
  time: number;

  constructor() { }

  ngOnChanges():void {
    if(this.timeDelay){
      this.time = 0;
      this.startTimerCount();
    }
  }

  startTimerCount() {
    this.interval = setInterval(() => {
      this.timeDelay-=1000;
      this.time = this.timeDelay;
      if(this.timeDelay <= 0){

      }
    },1000)
  }

  ngOnInit(): void {
  }

}
