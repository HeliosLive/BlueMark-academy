 
# In this question, we are expecting a behaviour from buttons to increase and decrease the current counter value.

>Difficulty level : Easy 
> - Junior developer : ~5mins 
> - Medior developer : ~3mins 
> - Senior developer : ~2mins

### 1. Html

```html
<button testId="increase-button">increase</button>
<button testId="decrease-button">decrease</button>
<p>current counter value : {{counter}}</p>
```

<details>
<summary>Show Solution</summary>
<p>

```html
<button testId="increase-button" (click)="setCounter('up')">increase</button>
<button testId="decrease-button" (click)="setCounter('down')">decrease</button>
<p>current counter value : {{counter}}</p>
```

</p>
</details>


### 2. Typescript

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-q1',
  templateUrl: './q1.component.html',
  styleUrls: ['./q1.component.scss'],
})
export class Q1Component {
  counter = 0;

  setCounter(direction: 'up' | 'down') {
    // playground
  }
}

```

<details>
<summary>Show Solution</summary>
<p>

```typescript
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

```

</p>
</details>
 