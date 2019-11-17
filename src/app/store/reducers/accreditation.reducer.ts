import { MetaReducer, createReducer, on } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import {
  AccreditationModel,
  AccreditationPropertyModel,
  AccreditationPropertyFetchingModel
} from 'src/app/models/accreditation.model';
import {
  LoadAccreditationList,
  LoadAccreditationListSuccess,
  LoadAccreditationListFailure,
  LoadAccreditationProperty,
  LoadAccreditationPropertySuccess,
  LoadAccreditationPropertyFailure
} from '../actions/accreditation.action';

export interface AccreditationState {
  // list
  list: AccreditationModel[];
  isFetchingList: boolean;
  error: any;

  // property
  properties: AccreditationPropertyModel;
  propertiesFetching: AccreditationPropertyFetchingModel;
  propertiesError: AccreditationPropertyModel;
}

const initialState: AccreditationState = {
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

const accreditationReducer = createReducer(
  initialState,

  // list
  on(
    LoadAccreditationList,
    (state, action) => ({ ...state, isFetchingList: true })
  ),

  on(
    LoadAccreditationListSuccess,
    (state, action) => ({ ...state, isFetchingList: false, list: action.list })
  ),

  on(
    LoadAccreditationListFailure,
    (state, action) => ({ ...state, isFetchingList: false, error: action.error })
  ),

  // property
  on(
    LoadAccreditationProperty,
    (state, action) => ({
      ...state,
      propertiesFetching: {
        ...state.propertiesFetching,
        [action.property]: true
      }
    })
  ),

  on(
    LoadAccreditationPropertySuccess,
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
    LoadAccreditationPropertyFailure,
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

export function AccreditationReducer(state, action) {
  return accreditationReducer(state, action);
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];
