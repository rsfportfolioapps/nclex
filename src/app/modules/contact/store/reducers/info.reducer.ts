import { MetaReducer, createReducer, on } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { InfoPropertyModel, InfoPropertyFetchingModel } from '../../models/info.model';
import { LoadInfoProperty, LoadInfoPropertySuccess, LoadInfoPropertyFailure } from '../actions/info.action';

export interface InfoState {
  // property
  properties: InfoPropertyModel;
  propertiesFetching: InfoPropertyFetchingModel;
  propertiesError: InfoPropertyModel;
}

const initialState: InfoState = {
  // property
  properties: {
    title: '',
    email: '',
    details: ''
  },
  propertiesFetching: {
    title: false,
    email: false,
    details: false
  },
  propertiesError: {
    title: '',
    email: '',
    details: ''
  }
};

const infoReducer = createReducer(
  initialState,

  // property
  on(
    LoadInfoProperty,
    (state, action) => ({
      ...state,
      propertiesFetching: {
        ...state.propertiesFetching,
        [action.property]: true
      }
    })
  ),

  on(
    LoadInfoPropertySuccess,
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
    LoadInfoPropertyFailure,
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
  )
);

export function InfoReducer(state, action) {
  return infoReducer(state, action);
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];
