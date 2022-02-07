 
# In this question, we are expecting from you to change the color variable after button clicks and bind the to the child component which triggers the host and set a specific class.

>Category Keywords: [`@HostBinding`]

>Difficulty level : Medium 
> - Junior developer : ~15mins 
> - Medior developer : ~8mins 
> - Senior developer : ~3mins

### 1. Html

```html
<div class="buttons">
  <button testId="red-button">Red</button>
  <button testId="green-button">Green</button>
  <button testId="blue-button">Blue</button>
</div>
<app-q9-child></app-q9-child>
```

<details>
<summary>Show Solution</summary>
<p>

```html
<div class="buttons">
  <button testId="red-button" (click)="onClick('red')">Red</button>
  <button testId="green-button" (click)="onClick('green')">Green</button>
  <button testId="blue-button" (click)="onClick('blue')">Blue</button>
</div>
<app-q9-child [color]="color"></app-q9-child>

```

</p>
</details>


### 2. Typescript

```typescript
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

  // playground
}
```

<details>
<summary>Show Solution</summary>
<p>

```typescript
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
```

</p>
</details>
 