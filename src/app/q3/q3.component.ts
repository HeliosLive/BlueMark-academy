import { Component } from '@angular/core';

export interface Fruit {
  id: number;
  name: string;
  inStock: boolean;
}

@Component({
  selector: 'app-q3',
  templateUrl: './q3.component.html',
  styleUrls: ['./q3.component.scss'],
})
export class Q3Component {
  emptyValue = 'Could not find what you are looking for..';
  searchText = '';
  fruitList: Fruit[] = [
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

  get fruits(): Fruit[] {
    return this.fruitList.filter((item) => {
      return (
        item.name.toLowerCase().includes(this.searchText.toLowerCase()) &&
        item.inStock
      );
    });
  }
}
