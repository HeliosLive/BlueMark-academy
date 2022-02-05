import { waitForAsync } from '@angular/core/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import type { Shoe, Store } from './q16.component';
import { Q16Component } from './q16.component';

describe('Q16', () => {
  let spectator: Spectator<Q16Component>;

  const createComponent = createComponentFactory({
    component: Q16Component,
    shallow: true,
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should store$ observable have the mapped store data from shoes and stocks', () => {
      const shoes = spectator.component.shoes;
      const stocks = spectator.component.stocks;
      const storeData = shoes.map((shoe: Shoe) => {
        return {
          shoeName: shoe.name,
          price: shoe.price,
          quantity: stocks.find((st) => st.shoeId === shoe?.id)?.quantity,
        };
      });

      spectator.component.store$.subscribe((value: Store[]) => {
        expect(value).toEqual(storeData);
      });
    });

    it('should tr elements counter equals to store data', () => {
      const row = spectator.queryAll(`[testId="shoe-row"]`);

      spectator.component.store$.subscribe((value: Store[]) => {
        expect(row.length).toEqual(value.length);
      });
    });

    it(
      'should shoe name and quantity match correctly',
      waitForAsync(() => {
        const row = spectator.queryAll(`[testId="shoe-row"]`);

        spectator.component.store$.subscribe((store: Store[]) => {
          store.forEach((value: Store) => {
            const trIndex = Number(
              row
                .map((val, i) => {
                  const includes = val.textContent
                    ?.toString()
                    .includes(value.shoeName);
                  return includes ? i : null;
                })
                .find((val) => Number(val?.toString()) > -1)
            );

            const html = row[trIndex].innerHTML.toString();

            expect(html).toContainText(`${value.price}`);
            expect(row[trIndex]).toHaveText(
              `${value.quantity ?? spectator.component.noDataErrorText}`
            );
          });
        });
      })
    );
  });
});
