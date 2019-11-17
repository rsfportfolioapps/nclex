import { MetaReducer, createReducer, on } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { InstitutionModel } from 'src/app/models/institution.model';
import { LoadInstitutionList, LoadInstitutionListSuccess, LoadInstitutionListFailure } from '../actions/institution.action';

export interface InstitutionState {
  list: InstitutionModel[];
  isFetchingList: boolean;
  error: any;
}

const initialState: InstitutionState = {
  list: [],
  isFetchingList: false,
  error: null
};

const institutionReducer = createReducer(
  initialState,

  on(
    LoadInstitutionList,
    (state, action) => ({ ...state, isFetchingList: true })
  ),

  on(
    LoadInstitutionListSuccess,
    (state, action) => ({ ...state, isFetchingList: false, list: action.list })
  ),

  on(
    LoadInstitutionListFailure,
    (state, action) => ({ ...state, isFetchingList: false, error: action.error })
  ),
);

export function InstitutionReducer(state, action) {
  return institutionReducer(state, action);
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];
