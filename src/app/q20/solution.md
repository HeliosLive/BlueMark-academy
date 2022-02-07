 
# In this question, we are expecting you to navigate to `users` path after clicking the button; with relativeTo current route and passing the users list as a `users` state. Most importantly we don't want that url changing. Child component has a `ul li` list element so after navigating we want to see the list underneath the button.

>Category Keywords: [`Router`, `ActivatedRoute`, `Router data passing between paths`, `router-outlet`, `skipLocationChange`, `getCurrentNavigation`]

>Difficulty level : Medium 
> - Junior developer : ~22mins 
> - Medior developer : ~15mins 
> - Senior developer : ~8mins

### 1. Html

```html
<button (click)="onClick()">navigate</button>
```

<details>
<summary>Show Solution</summary>
<p>

```html
<button (click)="onClick()">navigate</button>

<router-outlet></router-outlet>
```

</p>
</details>


### 2. Typescript

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-q20',
  templateUrl: './q20.component.html',
  styleUrls: ['./q20.component.scss'],
})
export class Q20Component {
  users = ['ahmet', 'jasper', 'marta'];

  onClick() {
    // playground
  }
}
@Component({
  selector: 'app-q20-child',
  template: `
    <ul>
      <li [attr.testId]="user + '-li'" *ngFor="let user of users">
        {{ user }}
      </li>
    </ul>
  `,
})
export class Q20ChildComponent {
  users!: string[];

  // playground
}
```

<details>
<summary>Show Solution</summary>
<p>

```typescript
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-q20',
  templateUrl: './q20.component.html',
  styleUrls: ['./q20.component.scss'],
})
export class Q20Component {
  users = ['ahmet', 'jasper', 'marta'];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  onClick() {
    this.router.navigate(['./users'], {
      skipLocationChange: true,
      state: {
        users: this.users,
      },
      relativeTo: this.activatedRoute,
    });
  }
}
@Component({
  selector: 'app-q20-child',
  template: `
    <ul>
      <li [attr.testId]="user + '-li'" *ngFor="let user of users">
        {{ user }}
      </li>
    </ul>
  `,
})
export class Q20ChildComponent {
  users!: string[];

  constructor(private router: Router) {
    this.users = this.router.getCurrentNavigation()?.extras?.state
      ?.users as string[];
  }
}
```

</p>
</details>
 