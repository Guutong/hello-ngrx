import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  @Input() books;

  constructor() {}

  ngOnInit() {}

  displayAuthor(authors: any[]) {
    if (authors && authors.length > 0) {
      return authors.join(', ');
    }
    return '';
  }
}
