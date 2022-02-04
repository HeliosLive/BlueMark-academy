 
# In this question, we are expecting you to list the users after clicking the button. Pass the user list from the related service to component and consume it then present the users with `li` tag.

### 1. Html

```html
<button (click)="getAllUsers()">call users</button>

<ul>
  <li></li>
</ul>
```

<details>
<summary>Show Solution</summary>
<p>

```html
<button (click)="getAllUsers()">call users</button>

<ul>
  <li *ngFor="let user of users">{{user}}</li>
</ul>
```

</p>
</details>


### 2. Typescript

```typescript
import { Component, Injectable } from '@angular/core';

import { asapScheduler, Observable, scheduled } from 'rxjs';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-q15',
  templateUrl: './q15.component.html',
  styleUrls: ['./q15.component.scss'],
})
export class Q15Component {
  users!: string[];

  getAllUsers() {
    // playground
  }
}

@Injectable({
  providedIn: 'any',
})
export class Q15Service {
  users = ['ahmet', 'jasper', 'marta'];

  getUsers(): Observable<string[]> {
    // playground
  }
}
```

<details>
<summary>Show Solution</summary>
<p>

```typescript
import { Component, Injectable } from '@angular/core';

import { asapScheduler, Observable, scheduled } from 'rxjs';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-q15',
  templateUrl: './q15.component.html',
  styleUrls: ['./q15.component.scss'],
})
export class Q15Component {
  users!: string[];

  constructor(private q15Service: Q15Service) {}

  getAllUsers() {
    this.q15Service
      .getUsers()
      .pipe(
        take(1),
        tap((users: string[]) => {
          this.users = users;
        })
      )
      .subscribe();
  }
}

@Injectable({
  providedIn: 'any',
})
export class Q15Service {
  users = ['ahmet', 'jasper', 'marta'];

  getUsers(): Observable<string[]> {
    return scheduled([this.users], asapScheduler);
  }
}
```

</p>
</details>
 