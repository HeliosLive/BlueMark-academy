import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-q6',
  templateUrl: './q6.component.html',
  styleUrls: ['./q6.component.scss'],
})
export class Q6Component implements OnInit {
  isRegistered = false;
  registerForm!: FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }

  onSubmit(): void {
    this.isRegistered = true;
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
