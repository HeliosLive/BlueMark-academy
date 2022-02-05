import { Component } from '@angular/core';

export type Size = 'small' | 'normal' | 'large';
export type Visibility = 'visible' | 'hidden';

@Component({
  selector: 'app-q19',
  templateUrl: './q19.component.html',
  styles: [
    `
      :host {
        display: grid;

        .buttons {
          display: flex;
        }

        img {
          width: 30%;

          &.small {
            width: 15%;
          }

          &.normal {
            width: 30%;
          }

          &.large {
            width: 45%;
          }
        }
      }
    `,
  ],
})
export class Q19Component {
  size!: Size; // hint : class binding
  visibility!: Visibility; // hint : style binding (visibility)

  setSize(size: Size) {
    this.size = size;
  }

  setVisibility(visibility: Visibility) {
    this.visibility = visibility;
  }
}
