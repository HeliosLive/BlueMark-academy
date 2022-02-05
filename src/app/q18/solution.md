 
# In this question, we are expecting you to fill the cycleHookList string array data with original hook names by order after component created but not destroyed or changed yet.

### 1. Html

```html
<ul>
  <li [attr.testId]="hook" *ngFor="let hook of cycleHookList">{{hook}}</li>
</ul>
```

<details>
<summary>Show Solution</summary>
<p>

```html
<ul>
  <li [attr.testId]="hook" *ngFor="let hook of cycleHookList">{{hook}}</li>
</ul>
```

</p>
</details>


### 2. Typescript

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-q18',
  templateUrl: './q18.component.html',
  styleUrls: ['./q18.component.scss'],
})
export class Q18Component {
  cycleHookList: string[] = [];
 
 // playground
}
```

<details>
<summary>Show Solution</summary>
<p>

```typescript
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-q18',
  templateUrl: './q18.component.html',
  styleUrls: ['./q18.component.scss'],
})
export class Q18Component
  implements
    OnInit,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  cycleHookList: string[] = [];

  ngOnInit(): void {
    this.cycleHookList.push('ngOnInit');
  }
  ngAfterContentInit(): void {
    this.cycleHookList.push('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    this.cycleHookList.push('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    this.cycleHookList.push('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    this.cycleHookList.push('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    this.cycleHookList.push('ngOnDestroy');
  }
}
```

</p>
</details>
 