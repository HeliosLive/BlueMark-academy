import { waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { Q13Component } from './q13.component';

describe('Q13', () => {
  let spectator: Spectator<Q13Component>;

  const createComponent = createComponentFactory({
    component: Q13Component,
    imports: [ReactiveFormsModule],
    shallow: true,
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should set the correct options on multi select', () => {
    const select = spectator.query('select') as HTMLSelectElement;
    spectator.selectOption(select, 'visa');

    expect(select).toHaveSelectedOptions('visa');
    expect(spectator.component.paymentForm.value.cardType).toBe('visa');
  });

  it('should set the correct value on input', () => {
    const input = spectator.query('input') as HTMLInputElement;
    spectator.typeInElement('234', input);

    expect(input.value).toBe('234');
    expect(spectator.component.paymentForm.value.cardNumber).toBe('234');
  });

  it(
    'should button has to be disabled if form is not valid yet only input filled',
    waitForAsync(() => {
      const input = spectator.query('input') as HTMLInputElement;
      spectator.typeInElement('234', input);

      const button = spectator.query('button');

      if (button) {
        expect(button).toBeDisabled();
      }
    })
  );

  it(
    'should button has to be disabled if form is not valid yet only select filled',
    waitForAsync(() => {
      const select = spectator.query('select') as HTMLSelectElement;
      spectator.selectOption(select, 'visa');

      const button = spectator.query('button');

      if (button) {
        expect(button).toBeDisabled();
      }
    })
  );

  describe('misMatch', () => {
    for (let { cardType, cardNumber, expected } of [
      { cardType: 'visa', cardNumber: '123', expected: true },
      { cardType: 'visa', cardNumber: '453', expected: undefined },
      { cardType: 'mastercard', cardNumber: '123', expected: true },
      { cardType: 'mastercard', cardNumber: '234', expected: undefined },
    ]) {
      it(
        `should return misMatch ${expected} for ${cardType} and ${cardNumber}`,
        waitForAsync(() => {
          const input = spectator.query('input') as HTMLInputElement;
          const select = spectator.query('select') as HTMLSelectElement;

          spectator.typeInElement(cardNumber, input);
          spectator.selectOption(select, `${cardType}`);

          spectator.detectChanges();

          const p = spectator.query('p');

          expect(spectator.component.misMatch).toEqual(expected);
          if (expected) {
            expect(p).toExist();
            expect(p).toHaveText(spectator.component.errorText);
          } else {
            expect(p).not.toExist();
          }
        })
      );
    }
  });
});
