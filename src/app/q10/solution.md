 
# In this question, we are expecting from you to make an http call with the given api url. `fact` field from the response has to be presented on UI in `p` element but until that response completes we would like to see `emptyResponse` inside `p` element.

### 1. Html

```html
<button (click)="onShuffle()">Shuffle</button>

<p></p>
```

<details>
<summary>Show Solution</summary>
<p>

```html
<button (click)="onShuffle()">Shuffle</button>

<ng-container *ngIf="(cat$ | async) as cat; else emptyTemp">
  <p>{{cat?.fact}}</p>
</ng-container>

<ng-template #emptyTemp>
  <p>{{emptyResponse}}</p>
</ng-template>
```

</p>
</details>


### 2. Typescript

```typescript
import { Component } from '@angular/core';

import { Observable } from 'rxjs';

export interface CatResponse {
  fact: string;
  length: number;
}

@Component({
  selector: 'app-q10',
  templateUrl: './q10.component.html',
  styleUrls: ['./q10.component.scss'],
})
export class Q10Component {
  catApiUrl = 'https://catfact.ninja/fact';
  cat$!: Observable<CatResponse>;
  emptyResponse = 'click shuffle button to see a fun fact about cats..';

  constructor(
    // playground
  ) {}

  onShuffle(): void {
    // playground
  }
}
```

<details>
<summary>Show Solution</summary>
<p>

```typescript
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { Observable } from 'rxjs';

export interface CatResponse {
  fact: string;
  length: number;
}

@Component({
  selector: 'app-q10',
  templateUrl: './q10.component.html',
  styleUrls: ['./q10.component.scss'],
})
export class Q10Component {
  catApiUrl = 'https://catfact.ninja/fact';
  cat$!: Observable<CatResponse>;
  emptyResponse = 'click shuffle button to see a fun fact about cats..';

  constructor(private httpClient: HttpClient) {}

  onShuffle(): void {
    this.cat$ = this.httpClient.get<CatResponse>(this.catApiUrl);
  }
}
```

</p>
</details>
 