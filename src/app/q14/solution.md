 
# In this question, we are expecting you to create a fake simulation for upload progress. After clicking the button it should be disabled and not triggered again. `progress` element should display the progress correctly. `p` element shouldn't be displayed until the upload process starts. Afterward, until the fake timer process completes `p` element should display loadingText then after the process is completed loadingText should be replaced with successText.  

>Difficulty level : Medium 
> - Junior developer : ~35mins 
> - Medior developer : ~20mins 
> - Senior developer : ~8mins

### 1. Html

```html
<button (click)="onUpload()">upload</button>

<progress [max]="estimatedTime"> </progress>

<p></p>
```

<details>
<summary>Show Solution</summary>
<p>

```html
<button [disabled]="started" (click)="onUpload()">upload</button>

<progress [value]="counter$ | async" [max]="estimatedTime"> </progress>

<ng-container *ngIf="started">
  <p>{{completed ? successText : loadingText}}</p>
</ng-container>
```

</p>
</details>


### 2. Typescript

```typescript
import { Component } from '@angular/core';

import { timer, Observable } from 'rxjs';

@Component({
  selector: 'app-q14',
  templateUrl: './q14.component.html',
  styleUrls: ['./q14.component.scss'],
})
export class Q14Component {
  counter$!: Observable<number>;

  timer$ = timer(0, 1000);
  estimatedTime = 3; // seconds
  started = false;
  completed = false;
  loadingText = 'loading';
  successText = 'success!';

  onUpload(): void {
    // playground
  }
}
```

<details>
<summary>Show Solution</summary>
<p>

```typescript
import { Component } from '@angular/core';

import { timer, Observable } from 'rxjs';
import { takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-q14',
  templateUrl: './q14.component.html',
  styleUrls: ['./q14.component.scss'],
})
export class Q14Component {
  counter$!: Observable<number>;

  timer$ = timer(0, 1000);
  estimatedTime = 3; // seconds
  started = false;
  completed = false;
  loadingText = 'loading';
  successText = 'success!';

  onUpload(): void {
    this.started = true;
    this.counter$ = this.timer$.pipe(
      takeWhile((val) => val <= this.estimatedTime),
      tap((value: number) => {
        if (value === this.estimatedTime) {
          this.completed = true;
        } else {
          this.completed = false;
        }
      })
    );
  }
}
```

</p>
</details>
 