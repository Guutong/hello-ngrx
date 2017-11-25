import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { GoogleBooksService } from './google-books.service';
import * as SearchActions from './search-actions';
@Injectable()
export class BookEffects {
  @Effect()
  search$: Observable<Action> = this.actions$.ofType(SearchActions.SEARCH)
  .map((action: SearchActions.Search) => action.payload)
  .switchMap(terms => this.bookService.searchBooks(terms))
  .map(results => new SearchActions.SearchSuccess(results));

  constructor(
    private actions$: Actions,
    private bookService: GoogleBooksService
  ) {}
}
