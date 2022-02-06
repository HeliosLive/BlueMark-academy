import { ActivatedRoute, Router } from '@angular/router';

import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { Q20ChildComponent, Q20Component } from './q20.component';

describe('Q20', () => {
  describe('Q20Component', () => {
    let spectator: Spectator<Q20Component>;

    const createComponent = createComponentFactory({
      component: Q20Component,
      mocks: [Router, ActivatedRoute],
      shallow: true,
    });

    beforeEach(() => {
      spectator = createComponent();
    });

    it('should create', () => {
      expect(spectator.component).toBeTruthy();
    });

    describe('onClick', () => {
      it('should navigate to detail related route path with given data', () => {
        jest.spyOn(spectator.component, 'onClick');

        const button = spectator.query('button');

        if (button) {
          spectator.click(button);
        }

        const router = spectator.inject(Router);
        const activatedRoute = spectator.inject(ActivatedRoute);

        expect(spectator.component.onClick).toHaveBeenCalled();
        expect(router.navigate).toBeCalledTimes(1);
        expect(router.navigate).not.toBeCalledWith(['someUrl']);
        expect(router.navigate).toBeCalledWith(['./users'], {
          skipLocationChange: true,
          state: {
            users: spectator.component.users,
          },
          relativeTo: activatedRoute,
        });
      });
    });
  });

  describe('Q20ChildComponent', () => {
    let spectator: Spectator<Q20ChildComponent>;
    const users = ['ahmet', 'jasper', 'marta'];
    const mockRouter = {
      getCurrentNavigation: jest.fn(() => {
        return {
          extras: {
            state: {
              users,
            },
          },
        };
      }),
    };

    const createComponent = createComponentFactory({
      component: Q20ChildComponent,
      providers: [{ provide: Router, useValue: mockRouter }],
      shallow: true,
    });

    beforeEach(() => {
      spectator = createComponent();
    });

    it('should create', () => {
      expect(spectator.component).toBeTruthy();
    });

    it('should users equals to router state data', () => {
      expect(spectator.component.users).toEqual(users);
    });

    for (let user of users) {
      it(`should ${user} li element exist with passed users`, () => {
        const li = spectator.query(`[testId="${user}-li"]`);

        expect(li).toExist();
      });
    }
  });
});
