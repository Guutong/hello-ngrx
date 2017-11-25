import { Book } from './book.model';
import { Action } from '@ngrx/store';

export const SEARCH = '[Search] Search';
export const SEARCH_SUCCESS = '[Search] Search Success';

export class Search implements Action {
  readonly type = SEARCH;
  constructor(public payload: string) {}
}

export class SearchSuccess implements Action {
  readonly type = SEARCH_SUCCESS;
  constructor(public payload: Book[]) {}
}

export type All = Search | SearchSuccess;
