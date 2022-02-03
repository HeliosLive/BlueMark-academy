import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import type { SquareColor } from './q9.component';
import { Q9ChildComponent, Q9Component } from './q9.component';

describe('Q9', () => {
  describe('Q9Component', () => {
    let spectator: Spectator<Q9Component>;

    const createComponent = createComponentFactory({
      component: Q9Component,
      declarations: [Q9ChildComponent],
      shallow: true,
    });

    beforeEach(() => {
      spectator = createComponent();
    });

    it('should create', () => {
      expect(spectator.component).toBeTruthy();
    });

    describe('onClick', () => {
      for (let color of ['red', 'green', 'blue']) {
        it(`should color variable set as ${color} parameter after button click`, () => {
          jest.spyOn(spectator.component, 'onClick');
          const button = spectator.query(`[testId="${color}-button"]`);
          if (button) {
            spectator.click(button);
          }

          expect(spectator.component.onClick).toHaveBeenCalled();
          expect(spectator.component.onClick).toHaveBeenCalledWith(`${color}`);
          expect(spectator.component.color).toEqual(`${color}`);
        });
      }
    });
  });

  describe('Q9ChildComponent', () => {
    let spectator: Spectator<Q9ChildComponent>;

    const createComponent = createComponentFactory({
      component: Q9ChildComponent,
      shallow: true,
      detectChanges: false,
    });

    beforeEach(() => {
      spectator = createComponent();
    });

    it('should create', () => {
      expect(spectator.component).toBeTruthy();
    });

    for (let color of ['red', 'green', 'blue'] as SquareColor[]) {
      it(`should host class set as ${color} input`, () => {
        spectator.component.color = color;
        spectator.detectChanges();

        expect(spectator.element).toHaveClass(`color-${color}`);
      });
    }
  });
});
