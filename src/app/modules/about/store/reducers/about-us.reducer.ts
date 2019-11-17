import { MetaReducer, createReducer, on } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from 'src/environments/environment';
import { AboutUsModel } from '../../models/about-us.model';
import { LoadAboutUsList, LoadAboutUsListSuccess, LoadAboutUsListFailure } from '../actions/about-us.action';

export interface AboutUsState {
  list: AboutUsModel[];
  isFetchingList: boolean;
  error: any;
}

const initialState: AboutUsState = {
  list: [],
  isFetchingList: false,
  error: null
};

const aboutUsReducer = createReducer(
  initialState,

  on(
    LoadAboutUsList,
    (state, action) => ({ ...state, isFetchingList: true })
  ),

  on(
    LoadAboutUsListSuccess,
    (state, action) => ({ ...state, isFetchingList: false, list: action.list })
  ),

  on(
    LoadAboutUsListFailure,
    (state, action) => ({ ...state, isFetchingList: false, error: action.error })
  ),
);

export function AboutUsReducer(state, action) {
  return aboutUsReducer(state, action);
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];
