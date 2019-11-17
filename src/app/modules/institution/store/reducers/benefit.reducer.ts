import { MetaReducer, createReducer, on } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from 'src/environments/environment';
import { BenefitModel, BenefitPropertyModel, BenefitPropertyFetchingModel } from '../../models/benefit.model';
import {
  LoadBenefitList,
  LoadBenefitListSuccess,
  LoadBenefitListFailure,
  LoadBenefitProperty,
  LoadBenefitPropertySuccess,
  LoadBenefitPropertyFailure
} from '../actions/benefit.action';

export interface BenefitState {
  // list
  list: BenefitModel[];
  isFetchingList: boolean;
  error: any;

  // property
  properties: BenefitPropertyModel;
  propertiesFetching: BenefitPropertyFetchingModel;
  propertiesError: BenefitPropertyModel;
}

const initialState: BenefitState = {
  // list
  list: [],
  isFetchingList: false,
  error: null,

  // property
  properties: {
    title: '',
    checkIconUrl: ''
  },
  propertiesFetching: {
    title: false,
    checkIconUrl: false
  },
  propertiesError: {
    title: '',
    checkIconUrl: ''
  }
};

const benefitReducer = createReducer(
  initialState,

  // list
  on(
    LoadBenefitList,
    (state, action) => ({ ...state, isFetchingList: true })
  ),

  on(
    LoadBenefitListSuccess,
    (state, action) => ({ ...state, isFetchingList: false, list: action.list })
  ),

  on(
    LoadBenefitListFailure,
    (state, action) => ({ ...state, isFetchingList: false, error: action.error })
  ),

  // property
  on(
    LoadBenefitProperty,
    (state, action) => ({
      ...state,
      propertiesFetching: {
        ...state.propertiesFetching,
        [action.property]: true
      }
    })
  ),

  on(
    LoadBenefitPropertySuccess,
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
    LoadBenefitPropertyFailure,
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

export function BenefitReducer(state, action) {
  return benefitReducer(state, action);
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];
