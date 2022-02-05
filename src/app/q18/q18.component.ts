import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-q18',
  templateUrl: './q18.component.html',
  styleUrls: ['./q18.component.scss'],
})
export class Q18Component
  implements
    OnInit,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  cycleHookList: string[] = [];

  ngOnInit(): void {
    this.cycleHookList.push('ngOnInit');
  }
  ngAfterContentInit(): void {
    this.cycleHookList.push('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    this.cycleHookList.push('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    this.cycleHookList.push('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    this.cycleHookList.push('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    this.cycleHookList.push('ngOnDestroy');
  }
}
