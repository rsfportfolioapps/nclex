import { createAction, props } from '@ngrx/store';
import { QuestionFormModel } from '../../models/question.model';

export enum QuestionActionTypes {
  // property
  LoadQuestionProperty = '[Question] Load Question Property',
  LoadQuestionPropertySuccess = '[Question] Load Question Property (success)',
  LoadQuestionPropertyFailure = '[Question] Load Question Property (failure)',

  // form
  SubmitQuestionForm = '[Question] Submit Question Form',
  SubmitQuestionFormSuccess = '[Question] Submit Question Form (success)',
  SubmitQuestionFormFailure = '[Question] Submit Question Form (failure)',
}

// property
export const LoadQuestionProperty = createAction(
  QuestionActionTypes.LoadQuestionProperty,
  props<{ property: string }>()
);

export const LoadQuestionPropertySuccess = createAction(
  QuestionActionTypes.LoadQuestionPropertySuccess,
  props<{ property: string, propertyValue: string }>()
);

export const LoadQuestionPropertyFailure = createAction(
  QuestionActionTypes.LoadQuestionPropertyFailure,
  props<{ property: string, propertyError: any }>()
);

// form
export const SubmitQuestionForm = createAction(
  QuestionActionTypes.SubmitQuestionForm,
  props<{ formData: QuestionFormModel }>()
);

export const SubmitQuestionFormSuccess = createAction(
  QuestionActionTypes.SubmitQuestionFormSuccess,
  props<{ formResponse: any }>()
);

export const SubmitQuestionFormFailure = createAction(
  QuestionActionTypes.SubmitQuestionFormFailure,
  props<{ formError: any }>()
);
