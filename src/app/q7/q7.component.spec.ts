import { FormsModule } from '@angular/forms';

import {
  createComponentFactory,
  createServiceFactory,
  Spectator,
  SpectatorService,
} from '@ngneat/spectator/jest';

import { Q7Component, CoolCasePipe } from './q7.component';

describe('Q7', () => {
  describe('Q7Component', () => {
    let spectator: Spectator<Q7Component>;

    const createComponent = createComponentFactory({
      component: Q7Component,
      declarations: [CoolCasePipe],
      imports: [FormsModule],
      shallow: true,
    });

    beforeEach(() => {
      spectator = createComponent();
    });

    it('should create', () => {
      expect(spectator.component).toBeTruthy();
    });

    it('should input value emits correctly', () => {
      const input = spectator.query('input') as HTMLInputElement;

      spectator.typeInElement('test', input);
      spectator.detectComponentChanges();

      expect(spectator.component.value).toEqual('test');
    });

    it('should p tag contains what has been typed on input', () => {
      const input = spectator.query('input') as HTMLInputElement;
      const p = spectator.query('p');

      spectator.typeInElement('test', input);
      spectator.detectComponentChanges();

      expect(p).not.toContainText('test');
      expect(p).toContainText('tEsT');
    });
  });

  describe('CoolCasePipe', () => {
    const createService = createServiceFactory({
      service: CoolCasePipe,
    });

    let spectator: SpectatorService<CoolCasePipe>;

    beforeEach(() => {
      spectator = createService();
    });

    it('should create an instance', () => {
      expect(spectator.service).toBeTruthy();
    });

    describe('transform', () => {
      it('should return the coolest text format', () => {
        const value = 'this is a random text';
        const expectation = value
          ?.split('')
          .map((letter, index) =>
            index & 1 ? letter.toUpperCase() : letter.toLowerCase()
          )
          .join('');
        const transformed = spectator.service.transform(value);
        expect(transformed).toEqual(expectation);
      });
    });
  });
});
