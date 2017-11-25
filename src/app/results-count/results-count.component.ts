import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-results-count',
  templateUrl: './results-count.component.html',
  styleUrls: ['./results-count.component.scss']
})
export class ResultsCountComponent implements OnInit {
  public count: Observable<number>;
  constructor(private store: Store<fromRoot.State>) {
    this.count = this.store.select(fromRoot.selectCount);
  }

  ngOnInit() {
  }

}
