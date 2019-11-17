import { MetaReducer, createReducer, on } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from 'src/environments/environment';
import { LoadBlogList, LoadBlogListSuccess, LoadBlogListFailure, PaginateBlogList } from '../actions/blog.action';
import { BlogModel, PaginateBlogModel } from '../../models/blog.model';

export interface BlogState {
  // list
  list: BlogModel[];
  isFetchingList: boolean;
  error: any;

  // pagination
  pagination: PaginateBlogModel;
}

const initialState: BlogState = {
  // list
  list: [],
  isFetchingList: false,
  error: null,

  // pagination
  pagination: {
    page: 1,
    collectionSize: 27,
    pageSize: 9
  }
};

const blogReducer = createReducer(
  initialState,

  // list
  on(
    LoadBlogList,
    (state) => ({ ...state, isFetchingList: true })
  ),

  on(
    LoadBlogListSuccess,
    (state, action) => ({
      ...state,
      isFetchingList: false,
      list: action.list
    })
  ),

  on(
    LoadBlogListFailure,
    (state, action) => ({
      ...state,
      isFetchingList: false,
      error: action.error
    })
  ),

  // pagination
  on(
    PaginateBlogList,
    (state, action) => ({ ...state, pagination: action.pagination })
  ),
);

export function BlogReducer(state, action) {
  return blogReducer(state, action);
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];
