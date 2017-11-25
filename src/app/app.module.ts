import { GoogleBooksService } from './google-books.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import {
  MatCardModule,
  MatToolbarModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule
} from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { ResultsCountComponent } from './results-count/results-count.component';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './book.effects';

@NgModule({
  declarations: [
    AppComponent,
    BookSearchComponent,
    SearchComponent,
    SearchResultsComponent,
    ResultsCountComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([{ path: '', component: SearchComponent }]),
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([BookEffects])
  ],
  exports: [MatCardModule],
  providers: [GoogleBooksService],
  bootstrap: [AppComponent]
})
export class AppModule {}
