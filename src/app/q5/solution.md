 
# In this question, we are expecting from you to pass a value from child to parent that we already typed on input in child. With this way we would like to present the passing parameter string inside a `p` tag in parent.

>Category Keywords: [`@Output() data passing`]

>Difficulty level : Easy 
> - Junior developer : ~15mins 
> - Medior developer : ~8mins 
> - Senior developer : ~3mins

### 1. Html

```html
<p>The name you have submit : {{name}}</p>

<app-q5-child></app-q5-child>

```

<details>
<summary>Show Solution</summary>
<p>

```html
<p>The name you have submit : {{name}}</p>

<app-q5-child (submit)="onSubmit($event)"></app-q5-child>

```

</p>
</details>


### 2. Typescript

```typescript
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-q5',
  templateUrl: './q5.component.html',
  styleUrls: ['./q5.component.scss'],
})
export class Q5Component {
  name = '';

  onSubmit(value: string): void {
    this.name = value;
  }
}

@Component({
  selector: 'app-q5-child',
  template: `
    <input [(ngModel)]="value" />
    <button>Submit</button>
  `,
})
export class Q5ChildComponent {
  value = '';

  // hint: use `submit` name for the event

  onClick() {
    // playground
  }
}
```

<details>
<summary>Show Solution</summary>
<p>

```typescript
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-q5',
  templateUrl: './q5.component.html',
  styleUrls: ['./q5.component.scss'],
})
export class Q5Component {
  name = '';

  onSubmit(value: string): void {
    this.name = value;
  }
}

@Component({
  selector: 'app-q5-child',
  template: `
    <input [(ngModel)]="value" />
    <button (click)="onClick()">Submit</button>
  `,
})
export class Q5ChildComponent {
  value = '';

  @Output() submit: EventEmitter<string> = new EventEmitter();

  onClick() {
    this.submit.emit(this.value);
  }
}
```

</p>
</details>
 