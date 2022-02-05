import { Component, OnInit } from '@angular/core';

import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

export interface Shoe {
  id: number;
  name: string;
  price: number;
}
export interface Stock {
  shoeId: number;
  quantity: number;
}
export interface Store {
  shoeName: string;
  price: number;
  quantity: number | undefined;
}

@Component({
  selector: 'app-q16',
  templateUrl: './q16.component.html',
  styleUrls: ['./q16.component.scss'],
})
export class Q16Component implements OnInit {
  shoes: Shoe[] = [
    {
      id: 1,
      name: 'Nike Legend Essential',
      price: 600,
    },
    {
      id: 2,
      name: 'Nike Air Max',
      price: 750,
    },
    {
      id: 3,
      name: 'Reebok Flexagon Energy',
      price: 350,
    },
  ];
  stocks: Stock[] = [
    {
      shoeId: 1,
      quantity: 35,
    },
    {
      shoeId: 2,
      quantity: 55,
    },
  ];
  noDataErrorText = 'TBD';

  private shoes$ = new BehaviorSubject<Shoe[]>(this.shoes);
  private stock$ = new BehaviorSubject<Stock[]>(this.stocks);
  store$!: Observable<Store[]>;

  ngOnInit(): void {
    this.store$ = combineLatest([this.shoes$, this.stock$]).pipe(
      take(1),
      map(([shoes, stocks]) => {
        return shoes.map((shoe: Shoe) => {
          return {
            shoeName: shoe.name,
            price: shoe.price,
            quantity: stocks.find((st) => st.shoeId === shoe.id)?.quantity,
          };
        });
      })
    );
  }
}
