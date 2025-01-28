import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  imports: [NgIf, NgFor],
  templateUrl: './odd.component.html',
  styleUrl: './odd.component.css',
})
export class OddComponent {
  @Input() odd?: number[];
}
