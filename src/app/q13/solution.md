 
# In this question, we are expecting from you to create a very simple card payment form. Including cart type selection, card number input, regarding the form valid a submit button and most importantly a `p` tag in order to show misMatch error. Beside required validations we would like to see card number and card type match validation.

>Difficulty level : Medium
> - Junior developer : ~35mins 
> - Medior developer : ~25mins 
> - Senior developer : ~10mins

### 1. Html

```html
<form novalidate autocomplete="off" [formGroup]="paymentForm">

  <select>
    <option>select card type</option>
  </select>

  <label for="cardNumber">cardNumber:</label>
  <input id="cardNumber"/>

  <button>Submit</button>

  <p class="error">{{errorText}}</p>
</form>
```

<details>
<summary>Show Solution</summary>
<p>

```html
<form novalidate autocomplete="off" [formGroup]="paymentForm">

  <select formControlName="cardType">
    <option [value]="0">select card type</option>
    <option *ngFor="let datum of cardData" [value]="datum.type">{{datum.type}}</option>
  </select>

  <label for="cardNumber">cardNumber:</label>
  <input id="cardNumber" formControlName="cardNumber" />

  <button [disabled]="!paymentForm?.valid">Submit</button>

  <p class="error" *ngIf="misMatch">{{errorText}}</p>
</form>
```

</p>
</details>


### 2. Typescript

```typescript
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  ValidatorFn,
} from '@angular/forms';

export interface Card {
  type: 'visa' | 'mastercard';
  startsWith: number;
}

@Component({
  selector: 'app-q13',
  templateUrl: './q13.component.html',
  styleUrls: ['./q13.component.scss'],
})
export class Q13Component implements OnInit {
  paymentForm!: FormGroup;

  cardNumberRegex = '^[0-9 ]+$';
  cardData: Card[] = [
    {
      type: 'visa',
      startsWith: 4,
    },
    {
      type: 'mastercard',
      startsWith: 2,
    },
  ];
  errorText = 'card type and number does not match!';

  ngOnInit(): void {
    this.buildForm();
  }

  get misMatch(): boolean {
    // playground
  }

  private buildForm(): void {
    // playground
  }

  private CardCheckValidator(cardData: Card[]): ValidatorFn {
    // hint: error naming should be misMatch
    // playground
  }
}
```

<details>
<summary>Show Solution</summary>
<p>

```typescript
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

export interface Card {
  type: 'visa' | 'mastercard';
  startsWith: number;
}

@Component({
  selector: 'app-q13',
  templateUrl: './q13.component.html',
  styleUrls: ['./q13.component.scss'],
})
export class Q13Component implements OnInit {
  paymentForm!: FormGroup;

  cardNumberRegex = '^[0-9 ]+$';
  cardData: Card[] = [
    {
      type: 'visa',
      startsWith: 4,
    },
    {
      type: 'mastercard',
      startsWith: 2,
    },
  ];
  errorText = 'card type and number does not match!';

  ngOnInit(): void {
    this.buildForm();
  }

  get misMatch(): boolean {
    const cardType = !!this.paymentForm?.value.cardType;
    const cardNumber = !!this.paymentForm?.value.cardNumber;

    return cardType && cardNumber ? this.paymentForm?.errors?.misMatch : null;
  }

  private buildForm(): void {
    this.paymentForm = new FormGroup({
      cardType: new FormControl(0, {
        validators: [Validators.required],
        updateOn: 'change',
      }),
      cardNumber: new FormControl('', {
        validators: [
          Validators.required,
          Validators.pattern(this.cardNumberRegex),
        ],
        updateOn: 'change',
      }),
    });
    this.paymentForm.setValidators(this.CardCheckValidator(this.cardData));
  }

  private CardCheckValidator(cardData: Card[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const cardType = control?.get('cardType')?.value;
      const cardNumber = control
        ?.get('cardNumber')
        ?.value?.toString()
        ?.replace(/\s+/g, '')
        .slice(0, 1);

      const startCheck = cardData
        ?.find((card) => card.type === cardType)
        ?.startsWith.toString();

      return cardNumber === startCheck ? null : { misMatch: true };
    };
  }
}
```

</p>
</details>
 