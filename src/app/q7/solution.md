 
# In this question, we are expecting from you to write a custom pipe which transform strings regarding the odd and even letter indexes. For example; `computer` should be like `cOmPuTeR`. Use input the trigger value variable and show the transformed text inside `p` element

>Difficulty level : Easy 
> - Junior developer : ~15mins 
> - Medior developer : ~8mins 
> - Senior developer : ~3mins

### 1. Html

```html
<input id="search">

<p>{{value}}</p>
```

<details>
<summary>Show Solution</summary>
<p>

```html
<input id="search" [(ngModel)]="value">

<p>{{value | coolCase}}</p>
```

</p>
</details>


### 2. Typescript

```typescript
import { Component, Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-q7',
  templateUrl: './q7.component.html',
  styleUrls: ['./q7.component.scss'],
})
export class Q7Component {
  value = '';
}

@Pipe({
  name: 'coolCase',
})
export class CoolCasePipe implements PipeTransform {
  transform(value: string): string {
    // playground
  }
}
```

<details>
<summary>Show Solution</summary>
<p>

```typescript
import { Component, Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-q7',
  templateUrl: './q7.component.html',
  styleUrls: ['./q7.component.scss'],
})
export class Q7Component {
  value = '';
}

@Pipe({
  name: 'coolCase',
})
export class CoolCasePipe implements PipeTransform {
  transform(value: string): string {
    return value
      ?.split('')
      .map((letter, index) =>
        index & 1 ? letter.toUpperCase() : letter.toLowerCase()
      )
      .join('');
  }
}
```

</p>
</details>
 