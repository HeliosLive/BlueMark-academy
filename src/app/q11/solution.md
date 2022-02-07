 
# In this question, we are expecting from you to create a username claim form with required and existance validations. Use the  service to validate your input value and present the status within `p` html element

>Category Keywords: [`Reactive form`, `async validator`, `observable method return`]
>
>Nice to have Keywords: [`Form control field parsing` ,`rxjs scheduled` ,`rxjs asapScheduler`, `rxjs of`]

>Difficulty level : Hard 
> - Junior developer : ~55mins 
> - Medior developer : ~27mins 
> - Senior developer : ~12mins

### 1. Html

```html
<form novalidate autocomplete="off" [formGroup]="registerForm">
  <label for="name">Name:</label>
  <input id="name" formControlName="name" />

  <p class="error"></p>
  <p class="success"></p>
</form>
```

<details>
<summary>Show Solution</summary>
<p>

```html
<form novalidate autocomplete="off" [formGroup]="registerForm">
  <label for="name">Name:</label>
  <input id="name" formControlName="name" />

  <p class="error" *ngIf="usernameRequiredError">{{requiredErrorText}}</p>
  <p class="error" *ngIf="usernameExistError">{{usernameExistErrorText}}</p>
  <p class="success" *ngIf="usernameErrors">{{usernameAvailableText}}</p>
</form>
```

</p>
</details>


### 2. Typescript

```typescript
import { Component, Injectable, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

import { asapScheduler, Observable, scheduled } from 'rxjs';
import { switchMap, map, first } from 'rxjs/operators';

@Component({
  selector: 'app-q11',
  templateUrl: './q11.component.html',
  styleUrls: ['./q11.component.scss'],
})
export class Q11Component implements OnInit {
  registerForm!: FormGroup;

  requiredErrorText = 'Username is required!';
  usernameExistErrorText = 'Username is exist!';
  usernameAvailableText = 'Username is available!';

  constructor(private q11Service: Q11Service) {}

  ngOnInit(): void {
    this.buildForm();
  }

  get usernameRequiredError(): boolean {
    // playground
  }

  get usernameExistError(): boolean {
    // playground
  }

  get usernameErrors(): boolean {
    // playground
  }

  private buildForm(): void {
    // playground
  }

  private usernameCheckAsyncValidator(): AsyncValidatorFn {
    // playground
  }
}

@Injectable({
  providedIn: 'any',
})
export class Q11Service {
  users = ['ahmet', 'jasper', 'marta'];

  check(value: string): Observable<boolean> {
    // hint: case sensitivity is important for username
    // playground
  }
}


```

<details>
<summary>Show Solution</summary>
<p>

```typescript
import { Component, Injectable, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

import { asapScheduler, Observable, scheduled } from 'rxjs';
import { switchMap, map, first } from 'rxjs/operators';

@Component({
  selector: 'app-q11',
  templateUrl: './q11.component.html',
  styleUrls: ['./q11.component.scss'],
})
export class Q11Component implements OnInit {
  registerForm!: FormGroup;

  requiredErrorText = 'Username is required!';
  usernameExistErrorText = 'Username is exist!';
  usernameAvailableText = 'Username is available!';

  constructor(private q11Service: Q11Service) {}

  ngOnInit(): void {
    this.buildForm();
  }

  get usernameRequiredError(): boolean {
    return this.registerForm?.controls?.name?.errors?.required;
  }

  get usernameExistError(): boolean {
    return this.registerForm?.controls?.name?.errors?.usernameExist;
  }

  get usernameErrors(): boolean {
    return !this.registerForm?.controls?.name?.errors;
  }

  private buildForm(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', {
        validators: [Validators.required],
        asyncValidators: [this.usernameCheckAsyncValidator()],
        updateOn: 'change',
      }),
    });
  }

  private usernameCheckAsyncValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return control.valueChanges.pipe(
        switchMap(() => this.q11Service.check(control.value)),
        map((response) => {
          return response ? { usernameExist: true } : null;
        }),
        first()
      );
    };
  }
}

@Injectable({
  providedIn: 'any',
})
export class Q11Service {
  users = ['ahmet', 'jasper', 'marta'];

  check(value: string): Observable<boolean> {
    const isExist = this.users
      .map((name) => name.toLowerCase())
      .includes(value.toLowerCase());
    return scheduled([isExist ? true : false], asapScheduler);
  }
}
```

</p>
</details>
 