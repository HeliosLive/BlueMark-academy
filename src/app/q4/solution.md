 
# In this question, we are expecting from you to pass the counter value to the child component -some how- and use *ngFor loop a `p` html element which text includes loop index number inside that child component (show the child component only if counter is greater than 0)

>Category Keywords: [`@Input() data passing`,`ngIf structural directive`, `ngFor structural directive`]

>Difficulty level : Easy 
> - Junior developer : ~25mins 
> - Medior developer : ~12mins 
> - Senior developer : ~5mins

### 1. Html

```html
<button (click)="addItem()">Add Item</button>

<!-- playground -->
```

<details>
<summary>Show Solution</summary>
<p>

```html
<button (click)="addItem()">Add Item</button>

<app-q4-child *ngIf="counter > 0" [value]="counter"></app-q4-child>
```

</p>
</details>


### 2. Typescript

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-q4',
  templateUrl: './q4.component.html',
  styleUrls: ['./q4.component.scss'],
})
export class Q4Component {
  counter = 0;

  addItem(): void {
    this.counter++;
  }
}

@Component({
  selector: 'app-q4-child',
  // playground
  template: // hint: use p tag for loop,
})
export class Q4ChildComponent {
  // hint: use `value` name for the passing param
  // playground
}

```

<details>
<summary>Show Solution</summary>
<p>

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-q4',
  templateUrl: './q4.component.html',
  styleUrls: ['./q4.component.scss'],
})
export class Q4Component {
  counter = 0;

  addItem(): void {
    this.counter++;
  }
}

@Component({
  selector: 'app-q4-child',
  template: `<p *ngFor="let _ of [].constructor(value); let i = index">
    {{ i }}
  </p>`,
})
export class Q4ChildComponent {
  @Input() value!: number;
}
```

</p>
</details>
 