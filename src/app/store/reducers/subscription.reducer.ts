import { MetaReducer, createReducer, on } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import {
  SubscriptionPropertyModel,
  SubscriptionPropertyFetchingModel,
} from 'src/app/models/subscription-form.model';
import {
  LoadSubscriptionProperty,
  LoadSubscriptionPropertySuccess,
  LoadSubscriptionPropertyFailure,
  SubmitSubscriptionForm,
  SubmitSubscriptionFormSuccess,
  SubmitSubscriptionFormFailure
} from '../actions/subscription.action';

export interface SubscriptionState {
  // property
  properties: SubscriptionPropertyModel;
  propertiesFetching: SubscriptionPropertyFetchingModel;
  propertiesError: SubscriptionPropertyModel;

  // form
  formSubmitting: boolean;
  formResponse: any;
  formError: any;
}

const initialState: SubscriptionState = {
  // property
  properties: {
    title: '',
  },
  propertiesFetching: {
    title: false,
  },
  propertiesError: {
    title: '',
  },

  // form
  formSubmitting: false,
  formResponse: null,
  formError: null
};

const subscriptionReducer = createReducer(
  initialState,

  // property
  on(
    LoadSubscriptionProperty,
    (state, action) => ({
      ...state,
      propertiesFetching: {
        ...state.propertiesFetching,
        [action.property]: true
      }
    })
  ),

  on(
    LoadSubscriptionPropertySuccess,
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
    LoadSubscriptionPropertyFailure,
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

  // form
  on(
    SubmitSubscriptionForm,
    (state, action) => ({
      ...state,
      formSubmitting: true
    })
  ),

  on(
    SubmitSubscriptionFormSuccess,
    (state, action) => ({
      ...state,
      formSubmitting: false,
      formResponse: action.formResponse
    })
  ),

  on(
    SubmitSubscriptionFormFailure,
    (state, action) => ({
      ...state,
      formSubmitting: false,
      formResponse: null,
      formError: action.formError
    })
  ),
);

export function SubscriptionReducer(state, action) {
  return subscriptionReducer(state, action);
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];
