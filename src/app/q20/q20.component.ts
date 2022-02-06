import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-q20',
  templateUrl: './q20.component.html',
  styleUrls: ['./q20.component.scss'],
})
export class Q20Component {
  users = ['ahmet', 'jasper', 'marta'];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  onClick() {
    this.router.navigate(['./users'], {
      skipLocationChange: true,
      state: {
        users: this.users,
      },
      relativeTo: this.activatedRoute,
    });
  }
}
@Component({
  selector: 'app-q20-child',
  template: `
    <ul>
      <li [attr.testId]="user + '-li'" *ngFor="let user of users">
        {{ user }}
      </li>
    </ul>
  `,
})
export class Q20ChildComponent {
  users!: string[];

  constructor(private router: Router) {
    this.users = this.router.getCurrentNavigation()?.extras?.state
      ?.users as string[];
  }
}
