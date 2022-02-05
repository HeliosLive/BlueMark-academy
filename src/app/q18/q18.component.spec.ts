import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { Q18Component } from './q18.component';

describe('Q18', () => {
  let spectator: Spectator<Q18Component>;

  const createComponent = createComponentFactory({
    component: Q18Component,
    shallow: true,
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
    spectator.detectChanges();
    spectator.component.ngOnDestroy();

    console.log(spectator.component.cycleHookList);
  });

  describe('cycleHookList', () => {
    for (let { hook, expected } of [
      { hook: 'ngOnChanges', expected: false },
      { hook: 'ngOnInit', expected: true },
      { hook: 'ngAfterContentInit', expected: true },
      { hook: 'ngAfterContentChecked', expected: true },
      { hook: 'ngAfterViewInit', expected: true },
      { hook: 'ngAfterViewChecked', expected: true },
      { hook: 'ngOnDestroy', expected: false },
    ]) {
      it(`should return ${expected} for ${hook} hook li elements`, () => {
        expect(spectator.component).toBeTruthy();
        spectator.detectChanges();

        const isInclude = spectator.component.cycleHookList.includes(hook);

        const li = spectator.query(`[testId="${hook}"]`);

        expect(isInclude).toBe(expected);
        if (expected) {
          expect(li).toExist();
        } else {
          expect(li).not.toExist();
        }
      });
    }
  });
});
