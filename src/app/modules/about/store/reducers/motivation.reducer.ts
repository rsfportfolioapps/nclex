import { MetaReducer, createReducer, on } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from 'src/environments/environment';
import { LoadMotivationList, LoadMotivationListSuccess, LoadMotivationListFailure } from '../actions/motivation.action';
import { MotivationModel } from '../../models/motivation.model';

export interface MotivationState {
  list: MotivationModel[];
  isFetchingList: boolean;
  error: any;
}

const initialState: MotivationState = {
  list: [],
  isFetchingList: false,
  error: null
};

const motivationReducer = createReducer(
  initialState,

  on(
    LoadMotivationList,
    (state, action) => ({ ...state, isFetchingList: true })
  ),

  on(
    LoadMotivationListSuccess,
    (state, action) => ({ ...state, isFetchingList: false, list: action.list })
  ),

  on(
    LoadMotivationListFailure,
    (state, action) => ({ ...state, isFetchingList: false, error: action.error })
  ),
);

export function MotivationReducer(state, action) {
  return motivationReducer(state, action);
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];
