import { Component } from '@angular/core';

import { timer, Observable } from 'rxjs';
import { takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-q14',
  templateUrl: './q14.component.html',
  styleUrls: ['./q14.component.scss'],
})
export class Q14Component {
  counter$!: Observable<number>;

  timer$ = timer(0, 1000);
  estimatedTime = 3; // seconds
  started = false;
  completed = false;
  loadingText = 'loading';
  successText = 'success!';

  onUpload(): void {
    this.started = true;
    this.counter$ = this.timer$.pipe(
      takeWhile((val) => val <= this.estimatedTime),
      tap((value: number) => {
        if (value === this.estimatedTime) {
          this.completed = true;
        } else {
          this.completed = false;
        }
      })
    );
  }
}
