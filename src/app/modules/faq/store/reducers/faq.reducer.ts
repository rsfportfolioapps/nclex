import { MetaReducer, createReducer, on } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from 'src/environments/environment';
import { FaqModel } from '../../models/faq.model';
import { LoadFaqList, LoadFaqListSuccess, LoadFaqListFailure } from '../actions/faq.action';

export interface FaqState {
  // list
  list: FaqModel[];
  isFetchingList: boolean;
  error: any;
}

const initialState: FaqState = {
  // list
  list: [],
  isFetchingList: false,
  error: null,
};

const faqReducer = createReducer(
  initialState,

  // list
  on(
    LoadFaqList,
    (state, action) => ({ ...state, isFetchingList: true })
  ),

  on(
    LoadFaqListSuccess,
    (state, action) => ({ ...state, isFetchingList: false, list: action.list })
  ),

  on(
    LoadFaqListFailure,
    (state, action) => ({ ...state, isFetchingList: false, error: action.error })
  )
);

export function FaqReducer(state, action) {
  return faqReducer(state, action);
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];
