import { createAction, props } from '@ngrx/store';
import { NewsModel } from 'src/app/models/news.model';

export enum NewsActionTypes {
  // list
  LoadNewsList = '[News] Load News List',
  LoadNewsListSuccess = '[News] Load News List (success)',
  LoadNewsListFailure = '[News] Load News List (failure)',

  // property
  LoadNewsProperty = '[News] Load News Property',
  LoadNewsPropertySuccess = '[News] Load News Property (success)',
  LoadNewsPropertyFailure = '[News] Load News Property (failure)'
}

// list
export const LoadNewsList = createAction(
  NewsActionTypes.LoadNewsList
);

export const LoadNewsListSuccess = createAction(
  NewsActionTypes.LoadNewsListSuccess,
  props<{ list: NewsModel[] }>()
);

export const LoadNewsListFailure = createAction(
  NewsActionTypes.LoadNewsListFailure,
  props<{ error: any }>()
);

// property
export const LoadNewsProperty = createAction(
  NewsActionTypes.LoadNewsProperty,
  props<{ property: string }>()
);

export const LoadNewsPropertySuccess = createAction(
  NewsActionTypes.LoadNewsPropertySuccess,
  props<{ property: string, propertyValue: string }>()
);

export const LoadNewsPropertyFailure = createAction(
  NewsActionTypes.LoadNewsPropertyFailure,
  props<{ property: string, propertyError: any }>()
);
