import { MetaReducer, createReducer, on } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from 'src/environments/environment';
import { FeatureModel, FeaturePropertyModel, FeaturePropertyFetchingModel } from '../../models/feature.model';
import {
  LoadFeatureList,
  LoadFeatureListSuccess,
  LoadFeatureListFailure,
  LoadFeatureProperty,
  LoadFeaturePropertySuccess,
  LoadFeaturePropertyFailure
} from '../actions/feature.action';

export interface FeatureState {
  // list
  list: FeatureModel[];
  isFetchingList: boolean;
  error: any;

  // property
  properties: FeaturePropertyModel;
  propertiesFetching: FeaturePropertyFetchingModel;
  propertiesError: FeaturePropertyModel;
}

const initialState: FeatureState = {
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

const featureReducer = createReducer(
  initialState,

  // list
  on(
    LoadFeatureList,
    (state, action) => ({ ...state, isFetchingList: true })
  ),

  on(
    LoadFeatureListSuccess,
    (state, action) => ({ ...state, isFetchingList: false, list: action.list })
  ),

  on(
    LoadFeatureListFailure,
    (state, action) => ({ ...state, isFetchingList: false, error: action.error })
  ),

  // property
  on(
    LoadFeatureProperty,
    (state, action) => ({
      ...state,
      propertiesFetching: {
        ...state.propertiesFetching,
        [action.property]: true
      }
    })
  ),

  on(
    LoadFeaturePropertySuccess,
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
    LoadFeaturePropertyFailure,
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

export function FeatureReducer(state, action) {
  return featureReducer(state, action);
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];
