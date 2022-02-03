import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { Observable } from 'rxjs';

export interface CatResponse {
  fact: string;
  length: number;
}

@Component({
  selector: 'app-q10',
  templateUrl: './q10.component.html',
  styleUrls: ['./q10.component.scss'],
})
export class Q10Component {
  catApiUrl = 'https://catfact.ninja/fact';
  cat$!: Observable<CatResponse>;
  emptyResponse = 'click shuffle button to see a fun fact about cats..';

  constructor(private httpClient: HttpClient) {}

  onShuffle(): void {
    this.cat$ = this.httpClient.get<CatResponse>(this.catApiUrl);
  }
}
