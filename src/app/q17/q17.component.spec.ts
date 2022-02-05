import {
  ControlContainer,
  ReactiveFormsModule,
  FormControl,
  FormGroup,
} from '@angular/forms';

import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { Q17ChildComponent, Q17Component } from './q17.component';

describe('Q17', () => {
  describe('Q17Component', () => {
    let spectator: Spectator<Q17Component>;

    const createComponent = createComponentFactory({
      component: Q17Component,
      declarations: [Q17ChildComponent],
      imports: [ReactiveFormsModule],
      shallow: true,
    });

    beforeEach(() => {
      spectator = createComponent();
    });

    it('should create', () => {
      expect(spectator.component).toBeTruthy();
    });

    it('should p tag present the form value correctly with form patchValue', () => {
      spectator.component.registerForm.controls.name.patchValue('test', {
        emitEvent: true,
      });
      spectator.detectChanges();

      const p = spectator.query('p');

      expect(p).toContainText('test');
    });

    it('should p tag present the form value correctly with input typing', () => {
      const child = spectator
        .query('app-q17-child')
        ?.querySelector('input') as HTMLInputElement;

      spectator.typeInElement('test', child);
      spectator.detectChanges();

      const p = spectator.query('p');

      expect(p).toContainText('test');
    });

    it('should child component input does not trigger form value while its disabled', () => {
      const child = spectator
        .query('app-q17-child')
        ?.querySelector('input') as HTMLInputElement;

      spectator.component.registerForm.disable();

      spectator.focus(child);

      const p = spectator.query('p');
      expect(p).not.toContainText('test');
      expect(child).toBeDisabled();
    });
  });

  describe('Q17ChildComponent', () => {
    let spectator: Spectator<Q17ChildComponent>;
    const mockForm: FormGroup = new FormGroup({
      name: new FormControl(''),
    });

    const createComponent = createComponentFactory({
      component: Q17ChildComponent,
      imports: [ReactiveFormsModule],
      providers: [
        { provide: ControlContainer, useValue: { control: mockForm } },
      ],
      shallow: true,
    });

    beforeEach(() => {
      spectator = createComponent({
        props: {
          formControlName: 'name',
        },
      });
    });

    it('should create', () => {
      expect(spectator.component).toBeTruthy();
    });

    it('should control return the form control name value correctly', () => {
      expect(spectator.component.control).toBeDefined();
    });

    it('should disabled called', () => {
      spectator.component.control.disable();
      spectator.detectChanges();

      const input = spectator.query('input') as HTMLInputElement;

      expect(input).toBeDisabled();
    });

    it('should writevalue called', () => {
      const input = spectator.query('input') as HTMLInputElement;
      spectator.typeInElement('test', input);

      spectator.detectChanges();

      expect(spectator.component.control.value).toEqual('test');
    });

    it('should registerOnTouched called', () => {
      const input = spectator.query('input') as HTMLInputElement;

      spectator.focus(input);
      spectator.blur(input);

      spectator.detectChanges();

      expect(spectator.component.control.touched).toBe(true);
    });

    it('should registerOnChange called', () => {
      const input = spectator.query('input') as HTMLInputElement;

      spectator.focus(input);
      spectator.typeInElement('test', input);
      spectator.blur(input);

      spectator.detectChanges();

      expect(spectator.component.control.dirty).toBe(true);
    });
  });
});
