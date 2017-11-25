import { Component, OnInit } from '@angular/core';
// import { GoogleBooksService } from '../google-books.service';
import { Book } from '../book.model';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import * as SearchAction from '../search-actions';
import * as fromRoot from '../reducers';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public terms: Observable<string>;
  public books: Observable<Book[]>;

  constructor(
    // private booksService: GoogleBooksService,
    private store: Store<fromRoot.State>
  ) {
    this.books = this.store.select(fromRoot.selectResults);
    this.terms = this.store.select(fromRoot.selectTerms);
  }

  ngOnInit() {}

  onSearch(terms: string) {
    this.store.dispatch(new SearchAction.Search(terms));
    // this.booksService
    //   .searchBooks(terms)
    //   .subscribe(results => (this.store.dispatch(new SearchAction.SearchSuccess(results))));
  }
}
