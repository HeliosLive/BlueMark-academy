 
# In this question, we are expecting from you to create a highlight directive with the color parameter. Colors are given inside `div` elements as text. `mouseenter` event should set the `background-color` but `mouseleave` event should reset the `background-color`

### 1. Html

```html
<div testId="red-div">Red</div>
<div testId="green-div">Green</div>
<div testId="yellow-div">Yellow</div>
```

<details>
<summary>Show Solution</summary>
<p>

```html
<div testId="red-div" highlight color="red">Red</div>
<div testId="green-div" highlight color="green">Green</div>
<div testId="yellow-div" highlight color="yellow">Yellow</div>
```

</p>
</details>


### 2. Typescript

```typescript
import {
  Component,
  Directive,
  HostListener,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-q8',
  templateUrl: './q8.component.html',
  styleUrls: ['./q8.component.scss'],
})
export class Q8Component {}

@Directive({
  selector: '[highlight]',
})
export class Q8HighlightDirective {
  @Input('color') color!: 'red' | 'green' | 'yellow';

  @HostListener('mouseenter') onMouseEnter() {
    // playground
  }

  @HostListener('mouseleave') onMouseLeave() {
    // playground
  }
  private highlight(color: string) {
    // playground
  }
}
```

<details>
<summary>Show Solution</summary>
<p>

```typescript
import {
  Component,
  Directive,
  ElementRef,
  HostListener,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-q8',
  templateUrl: './q8.component.html',
  styleUrls: ['./q8.component.scss'],
})
export class Q8Component {}

@Directive({
  selector: '[highlight]',
})
export class Q8HighlightDirective {
  @Input('color') color!: 'red' | 'green' | 'yellow';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
```

</p>
</details>
 