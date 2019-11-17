import { MetaReducer, createReducer, on } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from 'src/environments/environment';
import { PreparationModel, PreparationPropertyModel, PreparationPropertyFetchingModel } from '../../models/preparation.model';
import {
  LoadPreparationList,
  LoadPreparationListSuccess,
  LoadPreparationListFailure,
  LoadPreparationProperty,
  LoadPreparationPropertySuccess,
  LoadPreparationPropertyFailure
} from '../actions/preparation.action';

export interface PreparationState {
  // list
  list: PreparationModel[];
  isFetchingList: boolean;
  error: any;

  // property
  properties: PreparationPropertyModel;
  propertiesFetching: PreparationPropertyFetchingModel;
  propertiesError: PreparationPropertyModel;
}

const initialState: PreparationState = {
  // list
  list: [],
  isFetchingList: false,
  error: null,

  // property
  properties: {
    title: '',
    subtitle: '',
    imageUrl: ''
  },
  propertiesFetching: {
    title: false,
    subtitle: false,
    imageUrl: false
  },
  propertiesError: {
    title: '',
    subtitle: '',
    imageUrl: ''
  }
};

const preparationReducer = createReducer(
  initialState,

  // list
  on(
    LoadPreparationList,
    (state, action) => ({ ...state, isFetchingList: true })
  ),

  on(
    LoadPreparationListSuccess,
    (state, action) => ({ ...state, isFetchingList: false, list: action.list })
  ),

  on(
    LoadPreparationListFailure,
    (state, action) => ({ ...state, isFetchingList: false, error: action.error })
  ),

  // property
  on(
    LoadPreparationProperty,
    (state, action) => ({
      ...state,
      propertiesFetching: {
        ...state.propertiesFetching,
        [action.property]: true
      }
    })
  ),

  on(
    LoadPreparationPropertySuccess,
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
    LoadPreparationPropertyFailure,
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

export function PreparationReducer(state, action) {
  return preparationReducer(state, action);
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];
