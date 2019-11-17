import { createSelector } from '@ngrx/store';
import { BlogState } from '../reducers/blog.reducer';

export const blogState = state => state.blog;

// list
export const getBlogList = createSelector(
  blogState,
  (blog: BlogState) => blog.list
);

// pagination
export const getBlogPagination = createSelector(
  blogState,
  (blog: BlogState) => blog.pagination
);
