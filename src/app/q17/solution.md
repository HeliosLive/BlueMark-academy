 
# In this question, we are expecting you to connect registerForm with the child component. When the user types something inside the input `p` tag should present that value. Important form controls like `dirty`, `touched` and `disabled` should be accessible between **angular form API** and child component.

>Category Keywords: [`Reactive form`, `custom form control`, `control value accessors`]

>Difficulty level : Hard 
> - Junior developer : ~50mins 
> - Medior developer : ~15mins 
> - Senior developer : ~8mins 

### 1. Html

```html
<form novalidate [formGroup]="registerForm">
  <app-q17-child formControlName="name"></app-q17-child>
</form>
<p>{{ name?.value }}</p>
```

<details>
<summary>Show Solution</summary>
<p>

```html
<form novalidate [formGroup]="registerForm">
  <app-q17-child formControlName="name"></app-q17-child>
</form>
<p>{{ name?.value }}</p>
```

</p>
</details>


### 2. Typescript

```typescript
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
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
  // playground
})
export class Q17ChildComponent {
  // hint: name your method as control to connect with input
  // playground
}
```

<details>
<summary>Show Solution</summary>
<p>

```typescript
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
```

</p>
</details>
 