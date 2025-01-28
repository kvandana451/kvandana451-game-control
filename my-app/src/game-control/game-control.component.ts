import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  imports: [],
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css',
})
export class GameControlComponent {
  number = 0;
  intervalId: any;
  @Output() intervalFired = new EventEmitter();
  generateNum() {
    this.intervalId = setInterval(() => {
      console.log(this.number);
      this.intervalFired.emit(this.number);
      this.number++;
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalId);
  }
}
