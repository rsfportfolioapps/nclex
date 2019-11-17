import { MetaReducer, createReducer, on } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from 'src/environments/environment';
import { ImprovementModel, ImprovementPropertyModel, ImprovementPropertyFetchingModel } from '../../models/improvement.model';
import {
  LoadImprovementList,
  LoadImprovementListSuccess,
  LoadImprovementListFailure,
  LoadImprovementProperty,
  LoadImprovementPropertySuccess,
  LoadImprovementPropertyFailure
} from '../actions/improvement.action';

export interface ImprovementState {
  // list
  list: ImprovementModel[];
  isFetchingList: boolean;
  error: any;

  // property
  properties: ImprovementPropertyModel;
  propertiesFetching: ImprovementPropertyFetchingModel;
  propertiesError: ImprovementPropertyModel;
}

const initialState: ImprovementState = {
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

const improvementReducer = createReducer(
  initialState,

  // list
  on(
    LoadImprovementList,
    (state, action) => ({ ...state, isFetchingList: true })
  ),

  on(
    LoadImprovementListSuccess,
    (state, action) => ({ ...state, isFetchingList: false, list: action.list })
  ),

  on(
    LoadImprovementListFailure,
    (state, action) => ({ ...state, isFetchingList: false, error: action.error })
  ),

  // property
  on(
    LoadImprovementProperty,
    (state, action) => ({
      ...state,
      propertiesFetching: {
        ...state.propertiesFetching,
        [action.property]: true
      }
    })
  ),

  on(
    LoadImprovementPropertySuccess,
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
    LoadImprovementPropertyFailure,
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

export function ImprovementReducer(state, action) {
  return improvementReducer(state, action);
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];
