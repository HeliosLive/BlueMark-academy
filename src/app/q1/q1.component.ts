import { Component } from '@angular/core';

@Component({
  selector: 'app-q1',
  templateUrl: './q1.component.html',
  styleUrls: ['./q1.component.scss'],
})
export class Q1Component {
  counter = 0;

  setCounter(direction: 'up' | 'down') {
    if (direction === 'up') {
      this.counter++;
    } else {
      this.counter--;
    }
  }
}
