import { MetaReducer, createReducer, on } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { NewsModel, NewsPropertyModel, NewsPropertyFetchingModel } from 'src/app/models/news.model';
import {
  LoadNewsList,
  LoadNewsListSuccess,
  LoadNewsListFailure,
  LoadNewsProperty,
  LoadNewsPropertySuccess,
  LoadNewsPropertyFailure
} from '../actions/news.action';

export interface NewsState {
  // list
  list: NewsModel[];
  isFetchingList: boolean;
  error: any;

  // property
  properties: NewsPropertyModel;
  propertiesFetching: NewsPropertyFetchingModel;
  propertiesError: NewsPropertyModel;
}

const initialState: NewsState = {
  // list
  list: [],
  isFetchingList: false,
  error: null,

  // property
  properties: {
    title: ''
  },
  propertiesFetching: {
    title: false
  },
  propertiesError: {
    title: ''
  }
};

const newsReducer = createReducer(
  initialState,

  // list
  on(
    LoadNewsList,
    (state, action) => ({ ...state, isFetchingList: true })
  ),

  on(
    LoadNewsListSuccess,
    (state, action) => ({ ...state, isFetchingList: false, list: action.list })
  ),

  on(
    LoadNewsListFailure,
    (state, action) => ({ ...state, isFetchingList: false, error: action.error })
  ),

  // property
  on(
    LoadNewsProperty,
    (state, action) => ({
      ...state,
      propertiesFetching: {
        ...state.propertiesFetching,
        [action.property]: true
      }
    })
  ),

  on(
    LoadNewsPropertySuccess,
    (state, action) => ({
      ...state,
      propertiesFetching: {
        ...state.propertiesFetching,
        [action.property]: false
      },
      properties: {
        ...state.properties,
        [action.property]: action.propertyValue
      }
    })
  ),

  on(
    LoadNewsPropertyFailure,
    (state, action) => ({
      ...state,
      propertiesFetching: {
        ...state.propertiesFetching,
        [action.property]: false
      },
      propertiesError: {
        ...state.propertiesError,
        [action.property]: action.propertyError
      }
    })
  ),
);

export function NewsReducer(state, action) {
  return newsReducer(state, action);
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];
