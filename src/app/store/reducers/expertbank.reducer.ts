import { MetaReducer, createReducer, on } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import {
  ExpertbankModel,
  ExpertbankPropertyModel,
  ExpertbankPropertyFetchingModel
} from 'src/app/models/expertbank.model';
import {
  LoadExpertbankList,
  LoadExpertbankListSuccess,
  LoadExpertbankListFailure,
  LoadExpertbankProperty,
  LoadExpertbankPropertySuccess,
  LoadExpertbankPropertyFailure
} from '../actions/expertbank.action';

export interface ExpertbankState {
  // list
  list: ExpertbankModel[];
  isFetchingList: boolean;
  error: any;

  // property
  properties: ExpertbankPropertyModel;
  propertiesFetching: ExpertbankPropertyFetchingModel;
  propertiesError: ExpertbankPropertyModel;
}

const initialState: ExpertbankState = {
  // list
  list: [],
  isFetchingList: false,
  error: null,

  // property
  properties: {
    title: '',
    buttonText: ''
  },
  propertiesFetching: {
    title: false,
    buttonText: false
  },
  propertiesError: {
    title: '',
    buttonText: ''
  }
};

const expertbankReducer = createReducer(
  initialState,

  // list
  on(
    LoadExpertbankList,
    (state, action) => ({ ...state, isFetchingList: true })
  ),

  on(
    LoadExpertbankListSuccess,
    (state, action) => ({ ...state, isFetchingList: false, list: action.list })
  ),

  on(
    LoadExpertbankListFailure,
    (state, action) => ({ ...state, isFetchingList: false, error: action.error })
  ),

  // property
  on(
    LoadExpertbankProperty,
    (state, action) => ({
      ...state,
      propertiesFetching: {
        ...state.propertiesFetching,
        [action.property]: true
      }
    })
  ),

  on(
    LoadExpertbankPropertySuccess,
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
    LoadExpertbankPropertyFailure,
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

export function ExpertbankReducer(state, action) {
  return expertbankReducer(state, action);
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];
