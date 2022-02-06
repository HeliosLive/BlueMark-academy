import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface Question {
  path: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  questionList: Question[] = [
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

  constructor(private router: Router) {}

  onNavigate(question: Question) {
    this.router.navigateByUrl(question.path);
  }
}
