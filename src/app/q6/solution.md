 
# In this question, we are expecting from you to create an angular reactive form with a required name control. User shouldn't click a submit button until that field is valid. After submitting the form, the `p` tag should appear on the screen with the submitting name value.

>Category Keywords: [`Reactive form`, `Form Controls`, `Validators`]

>Difficulty level : Easy 
> - Junior developer : ~25mins 
> - Medior developer : ~15mins 
> - Senior developer : ~7mins

### 1. Html

```html
<form novalidate autocomplete="off" [formGroup]="registerForm" (ngSubmit)="onSubmit()">
  <label for="name">Name:</label>
  <input id="name"/>

  <button>Submit</button>
</form>

<p>Hello, you are registered successfully!</p>
```

<details>
<summary>Show Solution</summary>
<p>

```html
<form novalidate autocomplete="off" [formGroup]="registerForm" (ngSubmit)="onSubmit()">
  <label for="name">Name:</label>
  <input id="name" formControlName="name" />

  <button type="submit" [disabled]="!registerForm?.valid">Submit</button>
</form>

<p *ngIf="isRegistered">Hello {{registerForm?.value?.name}}, you are registered successfully!</p>
```

</p>
</details>


### 2. Typescript

```typescript
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-q6',
  templateUrl: './q6.component.html',
  styleUrls: ['./q6.component.scss'],
})
export class Q6Component implements OnInit {
  isRegistered = false;
  registerForm!: FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }

  onSubmit(): void {
    this.isRegistered = true;
  }

  private buildForm(): void {
    // playground
  }
}
```

<details>
<summary>Show Solution</summary>
<p>

```typescript
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-q6',
  templateUrl: './q6.component.html',
  styleUrls: ['./q6.component.scss'],
})
export class Q6Component implements OnInit {
  isRegistered = false;
  registerForm!: FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }

  onSubmit(): void {
    this.isRegistered = true;
  }

  private buildForm(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', {
        validators: [Validators.required],
        updateOn: 'change',
      }),
    });
  }
}
```

</p>
</details>
 