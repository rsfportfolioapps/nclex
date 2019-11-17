import { MetaReducer, createReducer, on } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from 'src/environments/environment';
import { InnovationModel, InnovationPropertyModel, InnovationPropertyFetchingModel } from '../../models/innovation.model';
import {
  LoadInnovationList,
  LoadInnovationListSuccess,
  LoadInnovationListFailure,
  LoadInnovationProperty,
  LoadInnovationPropertySuccess,
  LoadInnovationPropertyFailure
} from '../actions/innovation.action';

export interface InnovationState {
  // list
  list: InnovationModel[];
  isFetchingList: boolean;
  error: any;

  // property
  properties: InnovationPropertyModel;
  propertiesFetching: InnovationPropertyFetchingModel;
  propertiesError: InnovationPropertyModel;
}

const initialState: InnovationState = {
  // list
  list: [],
  isFetchingList: false,
  error: null,

  // property
  properties: {
    title: '',
    imageUrl: ''
  },
  propertiesFetching: {
    title: false,
    imageUrl: false
  },
  propertiesError: {
    title: '',
    imageUrl: ''
  }
};

const innovationReducer = createReducer(
  initialState,

  // list
  on(
    LoadInnovationList,
    (state, action) => ({ ...state, isFetchingList: true })
  ),

  on(
    LoadInnovationListSuccess,
    (state, action) => ({ ...state, isFetchingList: false, list: action.list })
  ),

  on(
    LoadInnovationListFailure,
    (state, action) => ({ ...state, isFetchingList: false, error: action.error })
  ),

  // property
  on(
    LoadInnovationProperty,
    (state, action) => ({
      ...state,
      propertiesFetching: {
        ...state.propertiesFetching,
        [action.property]: true
      }
    })
  ),

  on(
    LoadInnovationPropertySuccess,
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
    LoadInnovationPropertyFailure,
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

export function InnovationReducer(state, action) {
  return innovationReducer(state, action);
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];
