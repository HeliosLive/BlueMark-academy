 
# In this question, we are expecting from you to call the `setRandomColor` in child component from parent component by clicking the button. For the result we would like to see random `background-color` css property each time that related method called.

>Difficulty level : Easy 
> - Junior developer : ~25mins 
> - Medior developer : ~15mins 
> - Senior developer : ~7mins

### 1. Html

```html
<button (click)="onShuffle()">shuffle</button>
<app-q12-child #child></app-q12-child>
```

<details>
<summary>Show Solution</summary>
<p>

```html
<button (click)="onShuffle()">shuffle</button>
<app-q12-child #child></app-q12-child>
```

</p>
</details>


### 2. Typescript

```typescript
import { Component, HostBinding, ViewChild } from '@angular/core';

@Component({
  selector: 'app-q12',
  templateUrl: './q12.component.html',
  styleUrls: ['./q12.component.scss'],
})
export class Q12Component {
  // hint: keep the consistency of naming convention
  // playground
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

  // hint: set host style
  // playground
}
```

<details>
<summary>Show Solution</summary>
<p>

```typescript
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
```

</p>
</details>
 