 
# In this question, we are expecting you to combine shoe & stock observables and create mapped `Store` data to assign existing store observable. Then, consume that observable to fill the table with the following `name`, `price`, and `quantity` fields. if there is no data show `noDataErrorText` variable to present.

>Difficulty level : Medium 
> - Junior developer : ~35mins 
> - Medior developer : ~20mins 
> - Senior developer : ~6mins

### 1. Html

```html
<table>
  <tr>
    <th>Shoe Name</th>
    <th>Price</th>
    <th>Quantity</th>
  </tr>
  <tr testId="shoe-row">
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>
```

<details>
<summary>Show Solution</summary>
<p>

```html
<table *ngIf="(store$ | async) as store">
  <tr>
    <th>Shoe Name</th>
    <th>Price</th>
    <th>Quantity</th>
  </tr>
  <tr testId="shoe-row" *ngFor="let item of store">
    <td>{{item?.shoeName}}</td>
    <td>{{item?.price}}</td>
    <td>{{item?.quantity ?? noDataErrorText}}</td>
  </tr>
</table>
```

</p>
</details>


### 2. Typescript

```typescript
import { Component, OnInit } from '@angular/core';

import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

export interface Shoe {
  id: number;
  name: string;
  price: number;
}
export interface Stock {
  shoeId: number;
  quantity: number;
}
export interface Store {
  shoeName: string;
  price: number;
  quantity: number | undefined;
}

@Component({
  selector: 'app-q16',
  templateUrl: './q16.component.html',
  styleUrls: ['./q16.component.scss'],
})
export class Q16Component implements OnInit {
  shoes: Shoe[] = [
    {
      id: 1,
      name: 'Nike Legend Essential',
      price: 600,
    },
    {
      id: 2,
      name: 'Nike Air Max',
      price: 750,
    },
    {
      id: 3,
      name: 'Reebok Flexagon Energy',
      price: 350,
    },
  ];
  stocks: Stock[] = [
    {
      shoeId: 1,
      quantity: 35,
    },
    {
      shoeId: 2,
      quantity: 55,
    },
  ];
  noDataErrorText = 'TBD';

  private shoes$ = new BehaviorSubject<Shoe[]>(this.shoes);
  private stock$ = new BehaviorSubject<Stock[]>(this.stocks);
  store$!: Observable<Store[]>;

  ngOnInit(): void {
    // playground
  }
}
```

<details>
<summary>Show Solution</summary>
<p>

```typescript
import { Component, OnInit } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

export interface Shoe {
  id: number;
  name: string;
  price: number;
}
export interface Stock {
  shoeId: number;
  quantity: number;
}
export interface Store {
  shoeName: string;
  price: number;
  quantity: number | undefined;
}

@Component({
  selector: 'app-q16',
  templateUrl: './q16.component.html',
  styleUrls: ['./q16.component.scss'],
})
export class Q16Component implements OnInit {
  shoes: Shoe[] = [
    {
      id: 1,
      name: 'Nike Legend Essential',
      price: 600,
    },
    {
      id: 2,
      name: 'Nike Air Max',
      price: 750,
    },
    {
      id: 3,
      name: 'Reebok Flexagon Energy',
      price: 350,
    },
  ];
  stocks: Stock[] = [
    {
      shoeId: 1,
      quantity: 35,
    },
    {
      shoeId: 2,
      quantity: 55,
    },
  ];
  noDataErrorText = 'TBD';

  private shoes$ = new BehaviorSubject<Shoe[]>(this.shoes);
  private stock$ = new BehaviorSubject<Stock[]>(this.stocks);
  store$!: Observable<Store[]>;

  ngOnInit(): void {
    this.store$ = combineLatest([this.shoes$, this.stock$]).pipe(
      take(1),
      map(([shoes, stocks]) => {
        return shoes.map((shoe: Shoe) => {
          return {
            shoeName: shoe.name,
            price: shoe.price,
            quantity: stocks.find((st) => st.shoeId === shoe?.id)?.quantity,
          };
        });
      })
    );
  }
}
```

</p>
</details>
 