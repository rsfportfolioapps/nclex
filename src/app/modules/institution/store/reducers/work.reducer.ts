import { MetaReducer, createReducer, on } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from 'src/environments/environment';
import { WorkModel, WorkPropertyModel, WorkPropertyFetchingModel } from '../../models/work.model';
import {
  LoadWorkList,
  LoadWorkListSuccess,
  LoadWorkListFailure,
  LoadWorkProperty,
  LoadWorkPropertySuccess,
  LoadWorkPropertyFailure
} from '../actions/work.action';

export interface WorkState {
  // list
  list: WorkModel[];
  isFetchingList: boolean;
  error: any;

  // property
  properties: WorkPropertyModel;
  propertiesFetching: WorkPropertyFetchingModel;
  propertiesError: WorkPropertyModel;
}

const initialState: WorkState = {
  // list
  list: [],
  isFetchingList: false,
  error: null,

  // property
  properties: {
    title: '',
    subtitle: ''
  },
  propertiesFetching: {
    title: false,
    subtitle: false
  },
  propertiesError: {
    title: '',
    subtitle: ''
  }
};

const workReducer = createReducer(
  initialState,

  // list
  on(
    LoadWorkList,
    (state, action) => ({ ...state, isFetchingList: true })
  ),

  on(
    LoadWorkListSuccess,
    (state, action) => ({ ...state, isFetchingList: false, list: action.list })
  ),

  on(
    LoadWorkListFailure,
    (state, action) => ({ ...state, isFetchingList: false, error: action.error })
  ),

  // property
  on(
    LoadWorkProperty,
    (state, action) => ({
      ...state,
      propertiesFetching: {
        ...state.propertiesFetching,
        [action.property]: true
      }
    })
  ),

  on(
    LoadWorkPropertySuccess,
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
    LoadWorkPropertyFailure,
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

export function WorkReducer(state, action) {
  return workReducer(state, action);
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];
