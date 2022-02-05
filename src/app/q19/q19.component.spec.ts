import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { Q19Component } from './q19.component';

describe('Q19', () => {
  let spectator: Spectator<Q19Component>;

  const createComponent = createComponentFactory({
    component: Q19Component,
    shallow: true,
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  describe('setSize', () => {
    for (let size of ['small', 'normal', 'large']) {
      it(`should ${size} button triggers class correctly`, () => {
        jest.spyOn(spectator.component, 'setSize');

        const button = spectator.query(`[testId="${size}-button"]`);
        const img = spectator.query(`img`);

        if (button) {
          spectator.click(button);
        }

        expect(spectator.component.setSize).toHaveBeenCalled();
        expect(spectator.component.setSize).toHaveBeenCalledWith(size);
        expect(img).toHaveClass(size);
      });
    }
  });

  describe('setVisibility', () => {
    for (let visibility of ['hidden', 'visible']) {
      it(`should ${visibility} button triggers visibility style correctly`, () => {
        jest.spyOn(spectator.component, 'setVisibility');

        const button = spectator.query(`[testId="${visibility}-button"]`);

        if (button) {
          spectator.click(button);
        }

        expect(spectator.component.setVisibility).toHaveBeenCalled();
        expect(spectator.component.setVisibility).toHaveBeenCalledWith(
          visibility
        );

        const img = spectator.query('img')?.outerHTML.toString();

        expect(img).toContain(`style="visibility: ${visibility};"`);
      });
    }
  });
});
