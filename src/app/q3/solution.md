 
# In this question, we are expecting from you to filter `in stock` fruits with typing on input element. If there is no fruit what you search, show the emptyValue text (case sensitivity is important)

>Category Keywords: [`two way binding`, `ngIf structural directive`, `ngFor structural directive`, `array filter`]

>Difficulty level : Easy 
> - Junior developer : ~20mins 
> - Medior developer : ~11mins 
> - Senior developer : ~5mins

### 1. Html

```html
<label for="search">Search a fruit</label>
<input id="search">

<ul>
  <!-- use li element for cases -->
</ul>
```

<details>
<summary>Show Solution</summary>
<p>

```html
<label for="search">Search a fruit</label>
<input id="search" [(ngModel)]="searchText">

<ul>
  <li *ngFor="let fruit of fruits">
    {{fruit.name}}
  </li>
  <li *ngIf="fruits?.length === 0">{{emptyValue}}</li>
</ul>
```

</p>
</details>


### 2. Typescript

```typescript
import { Component } from '@angular/core';

export interface Fruit {
  id: number;
  name: string;
  inStock: boolean;
}

@Component({
  selector: 'app-q3',
  templateUrl: './q3.component.html',
  styleUrls: ['./q3.component.scss'],
})
export class Q3Component {
  emptyValue = 'Could not find what you are looking for..';
  searchText = '';
  fruitList: Fruit[] = [
    {
      id: 1,
      name: 'Banana',
      inStock: true,
    },
    {
      id: 2,
      name: 'Apple',
      inStock: false,
    },
    {
      id: 3,
      name: 'Watermelon',
      inStock: true,
    },
    {
      id: 3,
      name: 'Mango',
      inStock: true,
    },
  ];

  get fruits(): Fruit[] {
    // playground
  }
}
```

<details>
<summary>Show Solution</summary>
<p>

```typescript
import { Component } from '@angular/core';

export interface Fruit {
  id: number;
  name: string;
  inStock: boolean;
}

@Component({
  selector: 'app-q3',
  templateUrl: './q3.component.html',
  styleUrls: ['./q3.component.scss'],
})
export class Q3Component {
  emptyValue = 'Could not find what you are looking for..';
  searchText = '';
  fruitList: Fruit[] = [
    {
      id: 1,
      name: 'Banana',
      inStock: true,
    },
    {
      id: 2,
      name: 'Apple',
      inStock: false,
    },
    {
      id: 3,
      name: 'Watermelon',
      inStock: true,
    },
    {
      id: 3,
      name: 'Mango',
      inStock: true,
    },
  ];

  get fruits(): Fruit[] {
    return this.fruitList.filter((item) => {
      return (
        item.name.toLowerCase().includes(this.searchText.toLowerCase()) &&
        item.inStock
      );
    });
  }
}
```

</p>
</details>
 