import { Component, Injectable } from '@angular/core';

import { asapScheduler, Observable, scheduled } from 'rxjs';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-q15',
  templateUrl: './q15.component.html',
  styleUrls: ['./q15.component.scss'],
})
export class Q15Component {
  users!: string[];

  constructor(private q15Service: Q15Service) {}

  getAllUsers() {
    this.q15Service
      .getUsers()
      .pipe(
        take(1),
        tap((users: string[]) => {
          this.users = users;
        })
      )
      .subscribe();
  }
}

@Injectable({
  providedIn: 'any',
})
export class Q15Service {
  users = ['ahmet', 'jasper', 'marta'];

  getUsers(): Observable<string[]> {
    return scheduled([this.users], asapScheduler);
  }
}
