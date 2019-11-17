import { MetaReducer, createReducer, on } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import {
  RegistrationPropertyModel,
  RegistrationPropertyFetchingModel
} from 'src/app/models/registration-form.model';
import {
  LoadRegistrationProperty,
  LoadRegistrationPropertySuccess,
  LoadRegistrationPropertyFailure,
  SubmitRegistrationForm,
  SubmitRegistrationFormSuccess,
  SubmitRegistrationFormFailure
} from '../actions/registration.action';

export interface RegistrationState {
  // property
  properties: RegistrationPropertyModel;
  propertiesFetching: RegistrationPropertyFetchingModel;
  propertiesError: RegistrationPropertyModel;

  // form
  formSubmitting: boolean;
  formResponse: any;
  formError: any;
}

const initialState: RegistrationState = {
  // property
  properties: {
    title: '',
    subtitle: '',
    buttonText: ''
  },
  propertiesFetching: {
    title: false,
    subtitle: false,
    buttonText: false
  },
  propertiesError: {
    title: '',
    subtitle: '',
    buttonText: ''
  },

  // form
  formSubmitting: false,
  formResponse: null,
  formError: null
};

const registrationReducer = createReducer(
  initialState,

  // property
  on(
    LoadRegistrationProperty,
    (state, action) => ({
      ...state,
      propertiesFetching: {
        ...state.propertiesFetching,
        [action.property]: true
      }
    })
  ),

  on(
    LoadRegistrationPropertySuccess,
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
    LoadRegistrationPropertyFailure,
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
    SubmitRegistrationForm,
    (state, action) => ({
      ...state,
      formSubmitting: true
    })
  ),

  on(
    SubmitRegistrationFormSuccess,
    (state, action) => ({
      ...state,
      formSubmitting: false,
      formResponse: action.formResponse
    })
  ),

  on(
    SubmitRegistrationFormFailure,
    (state, action) => ({
      ...state,
      formSubmitting: false,
      formResponse: null,
      formError: action.formError
    })
  ),
);

export function RegistrationReducer(state, action) {
  return registrationReducer(state, action);
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];
