import { Router } from '@angular/router';

import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import type { Question } from './app.component';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  const questionList: Question[] = [
    {
      path: 'q1',
      text: 'Question 1',
    },
    {
      path: 'q2',
      text: 'Question 2',
    },
    {
      path: 'q3',
      text: 'Question 3',
    },
    {
      path: 'q4',
      text: 'Question 4',
    },
    {
      path: 'q5',
      text: 'Question 5',
    },
    {
      path: 'q6',
      text: 'Question 6',
    },
    {
      path: 'q7',
      text: 'Question 7',
    },
    {
      path: 'q8',
      text: 'Question 8',
    },
    {
      path: 'q9',
      text: 'Question 9',
    },
    {
      path: 'q10',
      text: 'Question 10',
    },
    {
      path: 'q11',
      text: 'Question 11',
    },
    {
      path: 'q12',
      text: 'Question 12',
    },
    {
      path: 'q13',
      text: 'Question 13',
    },
    {
      path: 'q14',
      text: 'Question 14',
    },
    {
      path: 'q15',
      text: 'Question 15',
    },
    {
      path: 'q16',
      text: 'Question 16',
    },
    {
      path: 'q17',
      text: 'Question 17',
    },
    {
      path: 'q18',
      text: 'Question 18',
    },
    {
      path: 'q19',
      text: 'Question 19',
    },
    {
      path: 'q20',
      text: 'Question 20',
    },
  ];

  const createComponent = createComponentFactory({
    component: AppComponent,
    mocks: [Router],
    shallow: true,
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  describe('onNavigate', () => {
    for (let question of questionList) {
      it(`should ${question.text} li path exist and navigate to ${question.path} url`, () => {
        jest.spyOn(spectator.component, 'onNavigate');

        const li = spectator.query(`[testId="${question.path}"]`);

        expect(li).toExist();

        if (li) {
          spectator.click(li);
        }

        const router = spectator.inject(Router);

        expect(spectator.component.onNavigate).toHaveBeenCalled();
        expect(spectator.component.onNavigate).toHaveBeenCalledWith(question);
        expect(router.navigateByUrl).toBeCalledTimes(1);
        expect(router.navigateByUrl).not.toBeCalledWith(['someUrl']);
        expect(router.navigateByUrl).toBeCalledWith(`${question.path}`);
      });
    }
  });
});
