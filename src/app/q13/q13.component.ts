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
