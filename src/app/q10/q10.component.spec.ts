import { HttpClient } from '@angular/common/http';
import { waitForAsync } from '@angular/core/testing';

import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { of } from 'rxjs';

import type { CatResponse } from './q10.component';
import { Q10Component } from './q10.component';

describe('Q10Component', () => {
  let spectator: Spectator<Q10Component>;
  const fakeResponse: CatResponse = {
    fact: 'cats are adorable!',
    length: 18,
  };
  const httpClient = { get: jest.fn() };
  httpClient.get.mockReturnValue(of(fakeResponse));

  const createComponent = createComponentFactory({
    component: Q10Component,
    providers: [{ provide: HttpClient, useValue: httpClient }],
    shallow: true,
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should empty p tag exist before http call', () => {
    const p = spectator.query(`p`);
    expect(p).toHaveText(spectator.component.emptyResponse);
  });

  describe('onShuffle', () => {
    it(
      `should make the call correctly then p tag text contains http response`,
      waitForAsync(() => {
        jest.spyOn(spectator.component, 'onShuffle');
        jest.spyOn(httpClient, 'get');

        const button = spectator.query('button');
        if (button) {
          spectator.click(button);
        }

        expect(spectator.component.onShuffle).toHaveBeenCalled();
        expect(httpClient.get).toHaveBeenCalled();
        expect(httpClient.get).toHaveBeenCalledWith(
          spectator.component.catApiUrl
        );

        spectator.component.cat$.subscribe((val: CatResponse) => {
          expect(val).toEqual(fakeResponse);
        });

        const p = spectator.query('p');
        expect(p).toContainText(fakeResponse.fact);
      })
    );
  });
});
