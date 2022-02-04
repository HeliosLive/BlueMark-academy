import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { Q1Component } from './q1.component';

describe('Q1', () => {
  let spectator: Spectator<Q1Component>;

  const createComponent = createComponentFactory({
    component: Q1Component,
    shallow: true,
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  describe('setCounter', () => {
    it('should increase the counter', () => {
      jest.spyOn(spectator.component, 'setCounter');

      const button = spectator.query(`[testId="increase-button"]`);
      const label = spectator.query(`p`);
      const value = spectator.component.counter;

      if (button) {
        spectator.click(button);
      }

      expect(spectator.component.setCounter).toHaveBeenCalled();
      expect(spectator.component.setCounter).toHaveBeenCalledWith('up');
      expect(spectator.component.counter).toEqual(value + 1);
      expect(label).toContainText(`${value + 1}`);
    });

    it('should decrease the counter', () => {
      jest.spyOn(spectator.component, 'setCounter');

      const button = spectator.query(`[testId="decrease-button"]`);
      const label = spectator.query(`p`);
      const value = spectator.component.counter;

      if (button) {
        spectator.click(button);
      }

      expect(spectator.component.setCounter).toHaveBeenCalled();
      expect(spectator.component.setCounter).toHaveBeenCalledWith('down');
      expect(spectator.component.counter).toEqual(value - 1);
      expect(label).toContainText(`${value - 1}`);
    });
  });
});
