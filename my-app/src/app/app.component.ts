import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameControlComponent } from '../game-control/game-control.component';
import { EvenComponent } from '../even/even.component';
import { OddComponent } from '../odd/odd.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GameControlComponent, EvenComponent, OddComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-app';
  evenNumbers: number[] = [];
  oddNumbers: number[] = [];
  onIntervalFired(val: number) {
    if (val % 2 === 0) {
      this.evenNumbers.push(val);
    } else {
      this.oddNumbers.push(val);
      console.log(this.oddNumbers);
    }
  }
}
