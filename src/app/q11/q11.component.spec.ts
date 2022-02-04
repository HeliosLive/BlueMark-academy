import { waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import {
  createComponentFactory,
  createServiceFactory,
  Spectator,
  SpectatorService,
} from '@ngneat/spectator/jest';

import { Q11Component, Q11Service } from './q11.component';

describe('Q11', () => {
  describe('Q11Component', () => {
    let spectator: Spectator<Q11Component>;

    const createComponent = createComponentFactory({
      component: Q11Component,
      imports: [ReactiveFormsModule],
      providers: [Q11Service],
      shallow: true,
    });

    beforeEach(() => {
      spectator = createComponent();
    });

    it('should create', () => {
      expect(spectator.component).toBeTruthy();
    });

    it(
      'should p element exist with required text if form required error exist',
      waitForAsync(() => {
        const p = spectator.query('p');

        expect(p).toHaveText(spectator.component.requiredErrorText);
        expect(spectator.component.usernameRequiredError).toEqual(true);
      })
    );

    it(
      'should p element exist with usernameExist text if form usernameExist error exist',
      waitForAsync(() => {
        const input = spectator.query('input') as HTMLInputElement;

        spectator.typeInElement('ahMEt', input);

        const p = spectator.query('p');

        expect(p).toHaveText(spectator.component.usernameExistErrorText);
        expect(spectator.component.usernameExistError).toEqual(true);
      })
    );

    it(
      'should p element exist with usernameAvailable text if form usernameAvailable exist',
      waitForAsync(() => {
        const input = spectator.query('input') as HTMLInputElement;

        spectator.typeInElement('ramazan', input);

        const p = spectator.query('p');

        expect(p).toHaveText(spectator.component.usernameAvailableText);
        expect(spectator.component.usernameErrors).toEqual(true);
      })
    );
  });

  describe('Q11Service', () => {
    let spectator: SpectatorService<Q11Service>;
    const createService = createServiceFactory({
      service: Q11Service,
    });

    beforeEach(() => (spectator = createService()));

    it('should create', () => {
      expect(spectator.service).toBeTruthy();
    });

    describe('checkUsername', () => {
      for (let { username, expected } of [
        { username: 'ahMet', expected: true },
        { username: 'JASPER', expected: true },
        { username: 'marta', expected: true },
        { username: 'Jason', expected: false },
        { username: 'RaMazaN', expected: false },
        { username: 'UfUK', expected: false },
      ]) {
        it(
          `should return ${expected} for ${username}`,
          waitForAsync(() => {
            spectator.service.check(username).subscribe((value: boolean) => {
              expect(value).toBe(expected);
            });
          })
        );
      }
    });
  });
});
