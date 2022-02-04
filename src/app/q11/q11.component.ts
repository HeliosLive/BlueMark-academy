import { Component, Injectable, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

import { asapScheduler, Observable, scheduled } from 'rxjs';
import { switchMap, map, first } from 'rxjs/operators';

@Component({
  selector: 'app-q11',
  templateUrl: './q11.component.html',
  styleUrls: ['./q11.component.scss'],
})
export class Q11Component implements OnInit {
  registerForm!: FormGroup;

  requiredErrorText = 'Username is required!';
  usernameExistErrorText = 'Username is exist!';
  usernameAvailableText = 'Username is available!';

  constructor(private q11Service: Q11Service) {}

  ngOnInit(): void {
    this.buildForm();
  }

  get usernameRequiredError(): boolean {
    return this.registerForm?.controls?.name?.errors?.required;
  }

  get usernameExistError(): boolean {
    return this.registerForm?.controls?.name?.errors?.usernameExist;
  }

  get usernameErrors(): boolean {
    return !this.registerForm?.controls?.name?.errors;
  }

  private buildForm(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', {
        validators: [Validators.required],
        asyncValidators: [this.usernameCheckAsyncValidator()],
        updateOn: 'change',
      }),
    });
  }

  private usernameCheckAsyncValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return control.valueChanges.pipe(
        switchMap(() => this.q11Service.check(control.value)),
        map((response) => {
          return response ? { usernameExist: true } : null;
        }),
        first()
      );
    };
  }
}

@Injectable({
  providedIn: 'any',
})
export class Q11Service {
  users = ['ahmet', 'jasper', 'marta'];

  check(value: string): Observable<boolean> {
    const isExist = this.users
      .map((name) => name.toLowerCase())
      .includes(value.toLowerCase());
    return scheduled([isExist ? true : false], asapScheduler);
  }
}
