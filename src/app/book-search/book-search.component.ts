import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {
  searchTerms: FormControl = new FormControl();

  @Input()
  set value(val: string) {
    this.searchTerms.setValue(val, { onlySelf: true, emitEvent: false });
  }

  @Output() search = new EventEmitter<string>();

  ngOnInit() {
    this.searchTerms.valueChanges
      .debounceTime(500)
      .filter(terms => terms !== '' && terms !== this.value)
      .subscribe(this.search);
  }
}
