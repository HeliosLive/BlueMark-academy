import { Component, HostBinding, Input } from '@angular/core';

export type SquareColor = 'red' | 'green' | 'blue';

@Component({
  selector: 'app-q9',
  templateUrl: './q9.component.html',
  styleUrls: ['./q9.component.scss'],
})
export class Q9Component {
  color!: SquareColor;

  onClick(color: SquareColor): void {
    this.color = color;
  }
}

@Component({
  selector: 'app-q9-child',
  template: '',
  styles: [
    `
      :host {
        height: 100px;
        width: 100px;
        border: 1px solid black;
      }
      :host(.color-red) {
        background-color: red;
      }
      :host(.color-green) {
        background-color: green;
      }
      :host(.color-blue) {
        background-color: blue;
      }
    `,
  ],
})
export class Q9ChildComponent {
  @Input() color!: SquareColor;

  @HostBinding('class')
  get classes(): string {
    return `${'color-' + this.color}`;
  }
}
