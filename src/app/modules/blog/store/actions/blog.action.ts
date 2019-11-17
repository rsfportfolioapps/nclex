import { createAction, props } from '@ngrx/store';
import { BlogModel, PaginateBlogModel } from '../../models/blog.model';

export enum BlogActionTypes {
  // list
  LoadBlogList = '[Blog] Load Blog List',
  LoadBlogListSuccess = '[Blog] Load Blog List (success)',
  LoadBlogListFailure = '[Blog] Load Blog List (failure)',

  // pagination
  PaginateBlogList = '[Blog] Paginate Blog List',
}

// list
export const LoadBlogList = createAction(
  BlogActionTypes.LoadBlogList
);

export const LoadBlogListSuccess = createAction(
  BlogActionTypes.LoadBlogListSuccess,
  props<{ list: BlogModel[] }>()
);

export const LoadBlogListFailure = createAction(
  BlogActionTypes.LoadBlogListFailure,
  props<{ error: any }>()
);


// pagination
export const PaginateBlogList = createAction(
  BlogActionTypes.PaginateBlogList,
  props<{ pagination: PaginateBlogModel }>()
);
