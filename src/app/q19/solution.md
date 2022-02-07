 
# In this question, we are expecting you to bind `class` and `style` by order into `img` html element with clicking related buttons.

>Category Keywords: [`ngClass directive`, `ngStyle directive`]

>Difficulty level : Easy 
> - Junior developer : ~15mins 
> - Medior developer : ~10mins 
> - Senior developer : ~5mins

### 1. Html

```html
<div class="buttons">
  <button testId="small-button">Small</button>
  <button testId="normal-button">Normal</button>
  <button testId="large-button">large</button>
  <button testId="hidden-button">Hidden</button>
  <button testId="visible-button">Visible</button>
</div>

<img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular-icon">
```

<details>
<summary>Show Solution</summary>
<p>

```html
<div class="buttons">
  <button testId="small-button" (click)="setSize('small')">Small</button>
  <button testId="normal-button" (click)="setSize('normal')">Normal</button>
  <button testId="large-button" (click)="setSize('large')">large</button>
  <button testId="hidden-button" (click)="setVisibility('hidden')">Hidden</button>
  <button testId="visible-button" (click)="setVisibility('visible')">Visible</button>
</div>

<img [ngClass]="size" [ngStyle]="{'visibility': visibility }"
  src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular-icon">
```

</p>
</details>


### 2. Typescript

```typescript
import { Component } from '@angular/core';

export type Size = 'small' | 'normal' | 'large';
export type Visibility = 'visible' | 'hidden';

@Component({
  selector: 'app-q19',
  templateUrl: './q19.component.html',
  styles: [
    `
      :host {
        display: grid;

        .buttons {
          display: flex;
        }

        img {
          width: 30%;

          &.small {
            width: 15%;
          }

          &.normal {
            width: 30%;
          }

          &.large {
            width: 45%;
          }
        }
      }
    `,
  ],
})
export class Q19Component {
  size!: Size; // hint : class binding
  visibility!: Visibility; // hint : style binding (visibility)

  setSize() {
    // playground
  }

  setVisibility() {
    // playground
  }
}
```

<details>
<summary>Show Solution</summary>
<p>

```typescript
import { Component } from '@angular/core';

export type Size = 'small' | 'normal' | 'large';
export type Visibility = 'visible' | 'hidden';

@Component({
  selector: 'app-q19',
  templateUrl: './q19.component.html',
  styles: [
    `
      :host {
        display: grid;

        .buttons {
          display: flex;
        }

        img {
          width: 30%;

          &.small {
            width: 15%;
          }

          &.normal {
            width: 30%;
          }

          &.large {
            width: 45%;
          }
        }
      }
    `,
  ],
})
export class Q19Component {
  size!: Size; // hint : class binding
  visibility!: Visibility; // hint : style binding (visibility)

  setSize(size: Size) {
    this.size = size;
  }

  setVisibility(visibility: Visibility) {
    this.visibility = visibility;
  }
}
```

</p>
</details>
 