import {
  createComponentFactory,
  createDirectiveFactory,
  Spectator,
  SpectatorDirective,
} from '@ngneat/spectator/jest';

import { Q8Component, Q8HighlightDirective } from './q8.component';

describe('Q8', () => {
  describe('Q8Component', () => {
    let spectator: Spectator<Q8Component>;

    const createComponent = createComponentFactory({
      component: Q8Component,
      declarations: [Q8HighlightDirective],
      shallow: true,
    });

    beforeEach(() => {
      spectator = createComponent();
    });

    it('should create', () => {
      expect(spectator.component).toBeTruthy();
    });

    for (let color of ['red', 'green', 'yellow']) {
      it(`should div background color activated as ${color} parameter after mouseenter`, () => {
        const div = spectator.query(`[testId="${color}-div"]`);
        if (div) {
          spectator.dispatchMouseEvent(div, 'mouseenter');
          const divElement = spectator
            .query(`[testId="${color}-div"]`)
            ?.outerHTML.toString();
          expect(divElement).toContain(`background-color: ${color}`);
        }
      });
    }
  });

  describe('Q8HighlightDirective', () => {
    let spectator: SpectatorDirective<Q8HighlightDirective>;
    const createDirective = createDirectiveFactory(Q8HighlightDirective);

    for (let color of ['red', 'green', 'yellow']) {
      it(`should change the background color as ${color} paramater`, () => {
        spectator = createDirective(
          `<div highlight color="${color}">Testing Highlight Directive</div>`
        );

        spectator.dispatchMouseEvent(spectator.element, 'mouseenter');

        const divElement = spectator.query('div')?.outerHTML.toString();

        expect(divElement).toContain(`background-color: ${color}`);
      });
    }

    it(`should reset the background color on mouseleave`, () => {
      spectator = createDirective(
        `<div highlight color="red">Testing Highlight Directive</div>`
      );
      spectator.dispatchMouseEvent(spectator.element, 'mouseleave');
      const divElement = spectator.query('div')?.outerHTML.toString();

      expect(divElement).not.toContain(`background-color: red`);
    });
  });
});
