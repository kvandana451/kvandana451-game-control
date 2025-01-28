import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  imports: [NgFor, NgIf],
  templateUrl: './even.component.html',
  styleUrl: './even.component.css',
})
export class EvenComponent {
  @Input() even?: number[];
}
