import { MetaReducer, createReducer, on } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { QuestionPropertyModel, QuestionPropertyFetchingModel } from '../../models/question.model';
import {
  LoadQuestionProperty,
  LoadQuestionPropertySuccess,
  LoadQuestionPropertyFailure,
  SubmitQuestionForm,
  SubmitQuestionFormSuccess,
  SubmitQuestionFormFailure
} from '../actions/question.action';

export interface QuestionState {
  // property
  properties: QuestionPropertyModel;
  propertiesFetching: QuestionPropertyFetchingModel;
  propertiesError: QuestionPropertyModel;

  // form
  formSubmitting: boolean;
  formResponse: any;
  formError: any;
}

const initialState: QuestionState = {
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

const questionReducer = createReducer(
  initialState,

  // property
  on(
    LoadQuestionProperty,
    (state, action) => ({
      ...state,
      propertiesFetching: {
        ...state.propertiesFetching,
        [action.property]: true
      }
    })
  ),

  on(
    LoadQuestionPropertySuccess,
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
    LoadQuestionPropertyFailure,
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
    SubmitQuestionForm,
    (state, action) => ({
      ...state,
      formSubmitting: true
    })
  ),

  on(
    SubmitQuestionFormSuccess,
    (state, action) => ({
      ...state,
      formSubmitting: false,
      formResponse: action.formResponse
    })
  ),

  on(
    SubmitQuestionFormFailure,
    (state, action) => ({
      ...state,
      formSubmitting: false,
      formResponse: null,
      formError: action.formError
    })
  ),
);

export function QuestionReducer(state, action) {
  return questionReducer(state, action);
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [storeFreeze] : [];
