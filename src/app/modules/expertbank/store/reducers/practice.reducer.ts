import { MetaReducer, createReducer, on } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from 'src/environments/environment';
import { PracticePropertyModel, PracticePropertyFetchingModel } from '../../models/practice.model';
import { LoadPracticeProperty, LoadPracticePropertySuccess, LoadPracticePropertyFailure } from '../actions/practice.action';

export interface PracticeState {
  // property
  properties: PracticePropertyModel;
  propertiesFetching: PracticePropertyFetchingModel;
  propertiesError: PracticePropertyModel;
}

const initialState: PracticeState = {
  // property
  properties: {
    title: '',
  },
  propertiesFetching: {
    title: false,
  },
  propertiesError: {
    title: '',
  }
};

const practiceReducer = createReducer(
  initialState,

  // property
  on(
    LoadPracticeProperty,
    (state, action) => ({
      ...state,
      propertiesFetching: {
        ...state.propertiesFetching,
        [action.property]: true
      }
    })
  ),

  on(
    LoadPracticePropertySuccess,
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
    LoadPracticePropertyFailure,
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

export function PracticeReducer(state, action) {
  return practiceReducer(state, action);
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];
