import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-q5',
  templateUrl: './q5.component.html',
  styleUrls: ['./q5.component.scss'],
})
export class Q5Component {
  name = '';

  onSubmit(value: string): void {
    this.name = value;
  }
}

@Component({
  selector: 'app-q5-child',
  template: `
    <input [(ngModel)]="value" />
    <button (click)="onClick()">Submit</button>
  `,
})
export class Q5ChildComponent {
  value = '';

  @Output() submit: EventEmitter<string> = new EventEmitter();

  onClick() {
    this.submit.emit(this.value);
  }
}
