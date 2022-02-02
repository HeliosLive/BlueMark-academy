import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { Q4ChildComponent, Q4Component } from './q4.component';

describe('Q4', () => {
  describe('Q4Component', () => {
    let spectator: Spectator<Q4Component>;

    const createComponent = createComponentFactory({
      component: Q4Component,
      shallow: true,
    });

    beforeEach(() => {
      spectator = createComponent();
    });

    it('should create', () => {
      expect(spectator.component).toBeTruthy();
    });

    describe('addItem', () => {
      it('should increase the counter after clicking the button', () => {
        const button = spectator.query('button');
        const counter = spectator.component.counter;

        if (button) {
          spectator.click(button);
        }

        expect(spectator.component.counter).toEqual(counter + 1);
      });

      it('should child component temp not exist in the beginning', () => {
        const child = spectator.query('app-q4-child');

        expect(child).not.toExist();
      });

      it('should child component temp exist after clicking the button', () => {
        const button = spectator.query('button');

        if (button) {
          spectator.click(button);
        }

        spectator.detectComponentChanges();

        const child = spectator.query('app-q4-child');

        expect(child).toExist();
      });
    });
  });

  describe('Q4ChildComponent', () => {
    let spectator: Spectator<Q4ChildComponent>;

    const createComponent = createComponentFactory({
      component: Q4ChildComponent,
      shallow: true,
    });

    beforeEach(() => {
      spectator = createComponent({
        props: {
          value: 4,
        },
      });
    });

    it('should create', () => {
      expect(spectator.component).toBeTruthy();
    });

    it('should p tag repeats as value', () => {
      const p = spectator.queryAll('p');

      expect(p.length).toEqual(spectator.component.value);
    });

    it('should p tag text contains the for loop index', () => {
      for (let j = 0; j < spectator.component.value; j++) {
        const p = spectator.queryAll('p')[j];

        expect(p).toContainText(j.toString());
      }
    });
  });
});
