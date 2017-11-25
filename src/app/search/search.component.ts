import { Component, OnInit } from '@angular/core';
import { GoogleBooksService } from '../google-books.service';
import { Book } from '../book.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public books: Book[] = [];

  constructor(private booksService: GoogleBooksService) {}
  ngOnInit() {}

  onSearch(terms: string) {
    this.booksService
      .searchBooks(terms)
      .subscribe(results => (this.books = results));
  }
}
