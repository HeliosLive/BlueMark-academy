import { fakeAsync, tick } from '@angular/core/testing';

import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { Q14Component } from './q14.component';

describe('Q14', () => {
  let spectator: Spectator<Q14Component>;

  const createComponent = createComponentFactory({
    component: Q14Component,
    shallow: true,
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  describe('onUpload', () => {
    it('should p element not exist until button clicked', () => {
      const p = spectator.query(`p`);

      expect(p).not.toExist();
    });

    it('should onUpload method called after button clicked', () => {
      jest.spyOn(spectator.component, 'onUpload');
      const button = spectator.query('button');

      if (button) {
        spectator.click(button);
      }

      expect(spectator.component.onUpload).toHaveBeenCalled();
    });

    it('should button not to be disabled before button clicked', () => {
      const button = spectator.query('button');

      if (button) {
        expect(button).not.toBeDisabled();
      }
    });

    it('should button disabled after button clicked', () => {
      const button = spectator.query('button');

      if (button) {
        spectator.click(button);
        expect(button).toBeDisabled();
      }
    });

    it('should p element have loading text after button clicked before completed', fakeAsync(() => {
      const button = spectator.query('button');

      if (button) {
        spectator.click(button);
      }
      const p = spectator.query(`p`);

      expect(p).toExist();
      expect(p).toHaveText(spectator.component.loadingText);
      expect(spectator.component.completed).toBe(false);

      tick((spectator.component.estimatedTime + 1) * 1000);
    }));

    it('should p element have success text after button clicked after completed', fakeAsync(() => {
      const button = spectator.query('button');

      if (button) {
        spectator.click(button);
      }

      tick((spectator.component.estimatedTime + 1) * 1000);
      spectator.detectChanges();
      const p = spectator.query(`p`);

      expect(p).toExist();
      expect(p).toHaveText(spectator.component.successText);
      expect(spectator.component.completed).toBe(true);
    }));

    it('should counter$ to be defined', fakeAsync(() => {
      const button = spectator.query('button');

      if (button) {
        spectator.click(button);
      }

      spectator.component.counter$.subscribe((value: number) => {
        expect(value).toBeDefined();
      });
      tick((spectator.component.estimatedTime + 1) * 1000);
    }));

    it('should progress element value display correctly before it starts', () => {
      const button = spectator.query('button');

      if (button) {
        spectator.click(button);
      }

      spectator.detectChanges();

      const progress = spectator.query('progress');

      expect(progress).toHaveValue(0 as any);
    });

    it('should progress element value display correctly after its completed', fakeAsync(() => {
      const button = spectator.query('button');
      const estimatedTime = spectator.component.estimatedTime;

      if (button) {
        spectator.click(button);
      }

      tick((estimatedTime + 1) * 1000);

      spectator.detectChanges();

      const progress = spectator.query('progress');

      expect(progress).toHaveValue(estimatedTime as any);
    }));
  });
});
