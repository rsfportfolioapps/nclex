import { MetaReducer, createReducer, on } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from 'src/environments/environment';
import { PlanModel, PlanPropertyModel, PlanPropertyFetchingModel } from '../../models/plan.model';
import {
  LoadPlanList,
  LoadPlanListSuccess,
  LoadPlanListFailure,
  LoadPlanProperty,
  LoadPlanPropertySuccess,
  LoadPlanPropertyFailure
} from '../actions/plan.action';

export interface PlanState {
  // list
  list: PlanModel[];
  isFetchingList: boolean;
  error: any;

  // property
  properties: PlanPropertyModel;
  propertiesFetching: PlanPropertyFetchingModel;
  propertiesError: PlanPropertyModel;
}

const initialState: PlanState = {
  // list
  list: [],
  isFetchingList: false,
  error: null,

  // property
  properties: {
    title: '',
    subtitle: '',
    checkImageUrl: '',
    buttonText: '',
  },
  propertiesFetching: {
    title: false,
    subtitle: false,
    checkImageUrl: false,
    buttonText: false,
  },
  propertiesError: {
    title: '',
    subtitle: '',
    checkImageUrl: '',
    buttonText: '',
  }
};

const planReducer = createReducer(
  initialState,

  // list
  on(
    LoadPlanList,
    (state, action) => ({ ...state, isFetchingList: true })
  ),

  on(
    LoadPlanListSuccess,
    (state, action) => ({ ...state, isFetchingList: false, list: action.list })
  ),

  on(
    LoadPlanListFailure,
    (state, action) => ({ ...state, isFetchingList: false, error: action.error })
  ),

  // property
  on(
    LoadPlanProperty,
    (state, action) => ({
      ...state,
      propertiesFetching: {
        ...state.propertiesFetching,
        [action.property]: true
      }
    })
  ),

  on(
    LoadPlanPropertySuccess,
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
    LoadPlanPropertyFailure,
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

export function PlanReducer(state, action) {
  return planReducer(state, action);
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];
