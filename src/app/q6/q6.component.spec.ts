import { ReactiveFormsModule } from '@angular/forms';

import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { Q6Component } from './q6.component';

describe('Q6Component', () => {
  let spectator: Spectator<Q6Component>;

  const createComponent = createComponentFactory({
    component: Q6Component,
    imports: [ReactiveFormsModule],
    shallow: true,
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should button has to be disabled if name input is empty', () => {
    const button = spectator.query('button');

    if (button) {
      expect(button).toBeDisabled();
    }
  });

  it('should button not to be disabled if name input is not empty', () => {
    const input = spectator.query('input') as HTMLInputElement;

    spectator.typeInElement('test', input);
    spectator.detectComponentChanges();

    const button = spectator.query('button');

    if (button) {
      expect(button).not.toBeDisabled();
    }
  });

  describe('onSubmit', () => {
    it('should p tag not exist until form register completed', () => {
      const p = spectator.query('p');

      expect(spectator.component.isRegistered).toBe(false);
      expect(p).not.toExist();
    });

    it('should p tag contains the name has been submitted from register form', () => {
      jest.spyOn(spectator.component, 'onSubmit');
      const input = spectator.query('input') as HTMLInputElement;

      spectator.typeInElement('test', input);
      spectator.detectComponentChanges();

      const button = spectator.query('button');

      if (button) {
        spectator.click(button);
      }
      spectator.detectChanges();

      const p = spectator.query('p');

      expect(spectator.component.onSubmit).toHaveBeenCalled();
      expect(spectator.component.isRegistered).toBe(true);
      expect(p).toContainText('test');
    });
  });
});
