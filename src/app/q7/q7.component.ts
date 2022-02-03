import { Component, Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-q7',
  templateUrl: './q7.component.html',
  styleUrls: ['./q7.component.scss'],
})
export class Q7Component {
  value = '';
}

@Pipe({
  name: 'coolCase',
})
export class CoolCasePipe implements PipeTransform {
  transform(value: string): string {
    return value
      ?.split('')
      .map((letter, index) =>
        index & 1 ? letter.toUpperCase() : letter.toLowerCase()
      )
      .join('');
  }
}
