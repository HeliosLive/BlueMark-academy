import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Injector,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  FormControlDirective,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-q17',
  templateUrl: './q17.component.html',
  styleUrls: ['./q17.component.scss'],
})
export class Q17Component implements OnInit {
  registerForm!: FormGroup;

  ngOnInit() {
    this.buildForm();
  }

  get name(): FormControl {
    return this.registerForm.get('name') as FormControl;
  }

  private buildForm(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', {
        validators: [Validators.required],
        updateOn: 'change',
      }),
    });
  }
}

@Component({
  selector: 'app-q17-child',
  template: '<input [formControl]="control" type="text" />',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => Q17ChildComponent),
    },
  ],
})
export class Q17ChildComponent implements ControlValueAccessor {
  @ViewChild(FormControlDirective, { static: true })
  formControlDirective!: FormControlDirective;

  @Input()
  formControl!: FormControl;
  @Input()
  formControlName!: string;

  get control() {
    return (
      this.formControl ||
      this.controlContainer.control?.get(this.formControlName)
    );
  }

  constructor(private injector: Injector) {}

  get controlContainer() {
    return this.injector.get(ControlContainer);
  }

  registerOnTouched(fn: any): void {
    this.formControlDirective.valueAccessor?.registerOnTouched(fn);
  }

  registerOnChange(fn: any): void {
    this.formControlDirective.valueAccessor?.registerOnChange(fn);
  }

  writeValue(obj: any): void {
    this.formControlDirective.valueAccessor?.writeValue(obj);
  }

  setDisabledState(isDisabled: boolean): void {
    this.formControlDirective.valueAccessor?.setDisabledState!(isDisabled);
  }
}
