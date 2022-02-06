import {
  createComponentFactory,
  createServiceFactory,
  Spectator,
  SpectatorService,
} from '@ngneat/spectator/jest';

import { Q15Component, Q15Service } from './q15.component';

describe('Q15', () => {
  describe('Q15Component', () => {
    let spectator: Spectator<Q15Component>;

    const createComponent = createComponentFactory({
      component: Q15Component,
      providers: [Q15Service],
      shallow: true,
    });

    beforeEach(() => {
      spectator = createComponent();
    });

    it('should create', () => {
      expect(spectator.component).toBeTruthy();
    });

    it('should users not to be defined until button clicked', () => {
      expect(spectator.component.users).not.toBeDefined();
    });

    it('should users to be defined after button clicked', () => {
      const button = spectator.query('button');

      if (button) {
        spectator.click(button);
      }

      expect(spectator.component.users).toBeDefined();
    });

    describe('getAllUsers', () => {
      it('should method called after button clicked', () => {
        jest.spyOn(spectator.component, 'getAllUsers');

        const button = spectator.query('button');

        if (button) {
          spectator.click(button);
        }

        expect(spectator.component.getAllUsers).toHaveBeenCalled();
      });

      it('should method called after button clicked', () => {
        const button = spectator.query('button');

        if (button) {
          spectator.click(button);
        }

        expect(spectator.component.users.length).toBeGreaterThan(0);
      });

      it('should li element not exist until button clicked', () => {
        const li = spectator.query('li');

        expect(li).not.toExist();
      });

      it('should li element exist after button clicked', () => {
        const button = spectator.query('button');

        if (button) {
          spectator.click(button);
        }

        spectator.detectChanges();

        const li = spectator.query('li');
        expect(li).toExist();
      });
    });
  });

  describe('Q15Service', () => {
    let spectator: SpectatorService<Q15Service>;
    const users = ['ahmet', 'jasper', 'marta'];

    const createService = createServiceFactory({
      service: Q15Service,
    });

    beforeEach(() => {
      spectator = createService();

      spectator.service.users = users;
    });

    it('should create', () => {
      expect(spectator.service).toBeTruthy();
    });

    describe('getUsers', () => {
      it(`should return users from constant user list data`, () => {
        spectator.service.getUsers().subscribe((value: string[]) => {
          expect(value.length).toBeGreaterThan(0);
        });
      });
    });
  });
});
