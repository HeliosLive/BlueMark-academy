import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-q4',
  templateUrl: './q4.component.html',
  styleUrls: ['./q4.component.scss'],
})
export class Q4Component {
  counter = 0;

  addItem(): void {
    this.counter++;
  }
}

@Component({
  selector: 'app-q4-child',
  template: `<p *ngFor="let _ of [].constructor(value); let i = index">
    {{ i }}
  </p>`,
})
export class Q4ChildComponent {
  @Input() value!: number;
}
