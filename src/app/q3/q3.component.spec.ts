import { FormsModule } from '@angular/forms';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import type { Fruit } from './q3.component';
import { Q3Component } from './q3.component';

describe('Q3', () => {
  let spectator: Spectator<Q3Component>;
  const fruitList: Fruit[] = [
    {
      id: 1,
      name: 'Banana',
      inStock: true,
    },
    {
      id: 2,
      name: 'Apple',
      inStock: false,
    },
    {
      id: 3,
      name: 'Watermelon',
      inStock: true,
    },
    {
      id: 3,
      name: 'Mango',
      inStock: true,
    },
  ];

  const createComponent = createComponentFactory({
    component: Q3Component,
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

      spectator.typeInElement('test', input);
      spectator.detectComponentChanges();

      expect(spectator.component.searchText).toEqual('test');
      expect(input.value).toEqual('test');
    });
  });

  describe('fruits', () => {
    for (let fruit of fruitList) {
      it(`should return filtered ${fruit.name} from the list regarding the search value`, () => {
        const input = spectator.query('input') as HTMLInputElement;
        const text = fruit.name.slice(2, 5).toUpperCase();

        spectator.typeInElement(text, input);
        spectator.detectComponentChanges();

        const filteredFruits = fruitList.filter((item) => {
          return (
            item.name
              .toLowerCase()
              .includes(spectator.component.searchText.toLowerCase()) &&
            item.inStock
          );
        });

        expect(spectator.component.searchText).toEqual(text);
        expect(spectator.component.fruits).toEqual(filteredFruits);
      });
    }

    it('should li elements counter equals to filtered fruit list if fruits.length > 0', () => {
      const input = spectator.query('input') as HTMLInputElement;
      const text = fruitList[0].name.toUpperCase();

      spectator.typeInElement(text, input);
      spectator.detectComponentChanges();

      const li = spectator.queryAll(`li`);

      const filteredFruits = fruitList.filter((item) => {
        return (
          item.name
            .toLowerCase()
            .includes(spectator.component.searchText.toLowerCase()) &&
          item.inStock
        );
      });

      expect(li?.length).toEqual(filteredFruits.length);
    });

    it('should li element show emptyValue text if fruits.length === 0', () => {
      const input = spectator.query('input') as HTMLInputElement;
      const text = 'not exist fruit';

      spectator.typeInElement(text, input);
      spectator.detectComponentChanges();

      const li = spectator.query(`li`);

      expect(li).toContainText(spectator.component.emptyValue);
    });
  });
});
