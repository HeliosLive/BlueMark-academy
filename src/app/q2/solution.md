 
# In this question, we are expecting from you to trigger `p` element inner text with typing on input element

>Difficulty level : Easy 
> - Junior developer : ~10mins 
> - Medior developer : ~6mins 
> - Senior developer : ~2mins

### 1. Html

```html
<input>
<p>{{searchValue}}</p>
```

<details>
<summary>Show Solution</summary>
<p>

```html
<input [(ngModel)]="searchValue">
<p>{{searchValue}}</p>
```

</p>
</details>


### 2. Typescript

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-q2',
  templateUrl: './q2.component.html',
  styleUrls: ['./q2.component.scss'],
})
export class Q2Component {
  searchValue = '';
}
```

<details>
<summary>Show Solution</summary>
<p>

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-q2',
  templateUrl: './q2.component.html',
  styleUrls: ['./q2.component.scss'],
})
export class Q2Component {
  searchValue = '';
}

```

</p>
</details>
 