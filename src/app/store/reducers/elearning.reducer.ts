
import { MetaReducer, createReducer, on } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import {
  ElearningModel,
  ElearningPropertyModel,
  ElearningPropertyFetchingModel
} from 'src/app/models/elearning.model';
import {
  LoadElearningList,
  LoadElearningListSuccess,
  LoadElearningListFailure,
  LoadElearningProperty,
  LoadElearningPropertySuccess,
  LoadElearningPropertyFailure
} from '../actions/elearning.action';

export interface ElearningState {
  // list
  list: ElearningModel[];
  isFetchingList: boolean;
  error: any;

  // property
  properties: ElearningPropertyModel;
  propertiesFetching: ElearningPropertyFetchingModel;
  propertiesError: ElearningPropertyModel;
}

const initialState: ElearningState = {
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

const elearningReducer = createReducer(
  initialState,

  // list
  on(
    LoadElearningList,
    (state, action) => ({ ...state, isFetchingList: true })
  ),

  on(
    LoadElearningListSuccess,
    (state, action) => ({ ...state, isFetchingList: false, list: action.list })
  ),

  on(
    LoadElearningListFailure,
    (state, action) => ({ ...state, isFetchingList: false, error: action.error })
  ),

  // property
  on(
    LoadElearningProperty,
    (state, action) => ({
      ...state,
      propertiesFetching: {
        ...state.propertiesFetching,
        [action.property]: true
      }
    })
  ),

  on(
    LoadElearningPropertySuccess,
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
    LoadElearningPropertyFailure,
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

export function ElearningReducer(state, action) {
  return elearningReducer(state, action);
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];
