import { Component, HostBinding, ViewChild } from '@angular/core';

@Component({
  selector: 'app-q12',
  templateUrl: './q12.component.html',
  styleUrls: ['./q12.component.scss'],
})
export class Q12Component {
  @ViewChild('child') child!: Q12ChildComponent;

  onShuffle() {
    this.child.setRandomColor();
  }
}

@Component({
  selector: 'app-q12-child',
  template: '',
  styles: [
    `
      :host {
        height: 100px;
        width: 100px;
        border: 1px solid black;
      }
    `,
  ],
})
export class Q12ChildComponent {
  colors = ['red', 'green', 'blue', 'black', 'orange', 'yellow', 'purple'];
  selectedColor!: string;

  setRandomColor() {
    const randomNumber = Math.floor(Math.random() * this.colors.length);
    this.selectedColor = this.colors[randomNumber];
  }

  @HostBinding('style.background-color')
  get backgroundColor(): string {
    return `${this.selectedColor}`;
  }
}
