import { FormsModule } from '@angular/forms';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { Q2Component } from './q2.component';

describe('Q2Component', () => {
  let spectator: Spectator<Q2Component>;

  const createComponent = createComponentFactory({
    component: Q2Component,
    imports: [FormsModule],
    shallow: true,
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  describe('search', () => {
    it('should search text bind into p html element', () => {
      const input = spectator.query('input') as HTMLInputElement;
      const label = spectator.query(`p`);

      spectator.typeInElement('test', input);
      spectator.detectComponentChanges();

      expect(spectator.component.searchValue).toEqual('test');
      expect(input.value).toEqual('test');
      expect(label).toContainText('test');
    });
  });
});
