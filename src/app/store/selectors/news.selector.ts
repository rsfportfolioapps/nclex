import { createSelector } from '@ngrx/store';
import { NewsState } from '../reducers/news.reducer';

export const newsState = state => state.news;

export const getNewsList = createSelector(
  newsState,
  (news: NewsState) => news.list
);

export const getNewsProperty = createSelector(
  newsState,
  (news: NewsState, props) => news.properties[props.property]
);
