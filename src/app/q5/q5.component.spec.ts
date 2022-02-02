import { FormsModule } from '@angular/forms';

import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { Q5ChildComponent, Q5Component } from './q5.component';

describe('Q5', () => {
  describe('Q5Component', () => {
    let spectator: Spectator<Q5Component>;

    const createComponent = createComponentFactory({
      component: Q5Component,
      shallow: true,
    });

    beforeEach(() => {
      spectator = createComponent();
    });

    it('should create', () => {
      expect(spectator.component).toBeTruthy();
    });

    describe('onSubmit', () => {
      it('should set the name variable what has been sent to the method as a param', () => {
        spectator.component.onSubmit('test');

        expect(spectator.component.name).toEqual('test');
      });

      it('should p tag repeats as value', () => {
        const p = spectator.query('p');
        spectator.component.onSubmit('test');
        spectator.detectChanges();

        expect(p).toContainText('test');
      });
    });
  });

  describe('Q5ChildComponent', () => {
    let spectator: Spectator<Q5ChildComponent>;

    const createComponent = createComponentFactory({
      component: Q5ChildComponent,
      imports: [FormsModule],
      shallow: true,
    });

    beforeEach(() => {
      spectator = createComponent();
    });

    it('should create', () => {
      expect(spectator.component).toBeTruthy();
    });

    it('should input value bind to value variable', () => {
      const input = spectator.query('input') as HTMLInputElement;

      spectator.typeInElement('test', input);
      spectator.detectComponentChanges();

      expect(spectator.component.value).toEqual('test');
      expect(input.value).toEqual('test');
    });

    it('should button emits the input value through submit output', () => {
      jest.spyOn(spectator.component, 'onClick');
      jest.spyOn(spectator.component.submit, 'emit');
      const input = spectator.query('input') as HTMLInputElement;

      spectator.typeInElement('test', input);
      spectator.detectComponentChanges();

      const button = spectator.query('button');

      if (button) {
        spectator.click(button);
      }

      expect(spectator.component.onClick).toHaveBeenCalled();
      expect(spectator.component.submit.emit).toHaveBeenCalled();
      expect(spectator.component.submit.emit).toHaveBeenCalledWith(
        spectator.component.value
      );
    });
  });
});
