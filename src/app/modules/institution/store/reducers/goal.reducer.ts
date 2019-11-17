import { MetaReducer, createReducer, on } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from 'src/environments/environment';
import { GoalModel, GoalPropertyModel, GoalPropertyFetchingModel } from '../../models/goal.model';
import {
  LoadGoalList,
  LoadGoalListSuccess,
  LoadGoalListFailure,
  LoadGoalProperty,
  LoadGoalPropertySuccess,
  LoadGoalPropertyFailure
} from '../actions/goal.action';

export interface GoalState {
  // list
  list: GoalModel[];
  isFetchingList: boolean;
  error: any;

  // property
  properties: GoalPropertyModel;
  propertiesFetching: GoalPropertyFetchingModel;
  propertiesError: GoalPropertyModel;
}

const initialState: GoalState = {
  // list
  list: [],
  isFetchingList: false,
  error: null,

  // property
  properties: {
    title: '',
    checkIconUrl: '',
    avatarUrl: ''
  },
  propertiesFetching: {
    title: false,
    checkIconUrl: false,
    avatarUrl: false
  },
  propertiesError: {
    title: '',
    checkIconUrl: '',
    avatarUrl: ''
  }
};

const goalReducer = createReducer(
  initialState,

  // list
  on(
    LoadGoalList,
    (state, action) => ({ ...state, isFetchingList: true })
  ),

  on(
    LoadGoalListSuccess,
    (state, action) => ({ ...state, isFetchingList: false, list: action.list })
  ),

  on(
    LoadGoalListFailure,
    (state, action) => ({ ...state, isFetchingList: false, error: action.error })
  ),

  // property
  on(
    LoadGoalProperty,
    (state, action) => ({
      ...state,
      propertiesFetching: {
        ...state.propertiesFetching,
        [action.property]: true
      }
    })
  ),

  on(
    LoadGoalPropertySuccess,
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
    LoadGoalPropertyFailure,
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

export function GoalReducer(state, action) {
  return goalReducer(state, action);
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];
