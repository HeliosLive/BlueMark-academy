import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { Q12ChildComponent, Q12Component } from './q12.component';

describe('Q12', () => {
  describe('Q12Component', () => {
    let spectator: Spectator<Q12Component>;

    const createComponent = createComponentFactory({
      component: Q12Component,
      declarations: [Q12ChildComponent],
      shallow: true,
    });

    beforeEach(() => {
      spectator = createComponent();
    });

    it('should create', () => {
      expect(spectator.component).toBeTruthy();
    });

    describe('onShuffle', () => {
      it('should make the child method call', () => {
        jest.spyOn(spectator.component.child, 'setRandomColor');
        jest.spyOn(spectator.component, 'onShuffle');

        const button = spectator.query(`button`);

        if (button) {
          spectator.click(button);
        }

        expect(spectator.component.onShuffle).toHaveBeenCalled();
        expect(spectator.component.child.setRandomColor).toHaveBeenCalled();
      });
    });
  });

  describe('Q12ChildComponent', () => {
    let spectator: Spectator<Q12ChildComponent>;

    const createComponent = createComponentFactory({
      component: Q12ChildComponent,
      shallow: true,
      detectChanges: false,
    });

    beforeEach(() => {
      spectator = createComponent();
    });

    it('should create', () => {
      expect(spectator.component).toBeTruthy();
    });

    it('should selected color undefined in the beginning', () => {
      expect(spectator.component.selectedColor).not.toBeDefined();
    });

    it('should selected color to be defined after setRandomColor method', () => {
      spectator.component.setRandomColor();
      spectator.detectChanges();

      expect(spectator.component.selectedColor).toBeDefined();
    });

    describe('HostBinding', () => {
      for (let color of [
        'red',
        'green',
        'blue',
        'black',
        'orange',
        'yellow',
        'purple',
      ]) {
        it(`should host element set background color as ${color} variable`, () => {
          spectator.component.selectedColor = color;
          spectator.detectChanges();

          const div = spectator.element?.outerHTML.toString();

          if (div) {
            expect(div).toContain(`background-color: ${color};`);
          }
        });
      }
    });
  });
});
