import { MetaReducer, createReducer, on } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from 'src/environments/environment';
import { AdvantageModel, AdvantagePropertyModel, AdvantagePropertyFetchingModel } from '../../models/advantage.model';
import {
  LoadAdvantageList,
  LoadAdvantageListSuccess,
  LoadAdvantageListFailure,
  LoadAdvantageProperty,
  LoadAdvantagePropertySuccess,
  LoadAdvantagePropertyFailure
} from '../actions/advantage.action';

export interface AdvantageState {
  // list
  list: AdvantageModel[];
  isFetchingList: boolean;
  error: any;

  // property
  properties: AdvantagePropertyModel;
  propertiesFetching: AdvantagePropertyFetchingModel;
  propertiesError: AdvantagePropertyModel;
}

const initialState: AdvantageState = {
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

const advantageReducer = createReducer(
  initialState,

  // list
  on(
    LoadAdvantageList,
    (state, action) => ({ ...state, isFetchingList: true })
  ),

  on(
    LoadAdvantageListSuccess,
    (state, action) => ({ ...state, isFetchingList: false, list: action.list })
  ),

  on(
    LoadAdvantageListFailure,
    (state, action) => ({ ...state, isFetchingList: false, error: action.error })
  ),

  // property
  on(
    LoadAdvantageProperty,
    (state, action) => ({
      ...state,
      propertiesFetching: {
        ...state.propertiesFetching,
        [action.property]: true
      }
    })
  ),

  on(
    LoadAdvantagePropertySuccess,
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
    LoadAdvantagePropertyFailure,
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

export function AdvantageReducer(state, action) {
  return advantageReducer(state, action);
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];
