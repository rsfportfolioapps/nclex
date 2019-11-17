import { createAction, props } from '@ngrx/store';
import { RegistrationFormModel } from 'src/app/models/registration-form.model';

export enum RegistrationActionTypes {
  // property
  LoadRegistrationProperty = '[Registration] Load Registration Property',
  LoadRegistrationPropertySuccess = '[Registration] Load Registration Property (success)',
  LoadRegistrationPropertyFailure = '[Registration] Load Registration Property (failure)',

  SubmitRegistrationForm = '[Registration] Submit Registration Form',
  SubmitRegistrationFormSuccess = '[Registration] Submit Registration Form (success)',
  SubmitRegistrationFormFailure = '[Registration] Submit Registration Form (failure)',
}

// property
export const LoadRegistrationProperty = createAction(
  RegistrationActionTypes.LoadRegistrationProperty,
  props<{ property: string, page: string }>()
);

export const LoadRegistrationPropertySuccess = createAction(
  RegistrationActionTypes.LoadRegistrationPropertySuccess,
  props<{ property: string, propertyValue: string }>()
);

export const LoadRegistrationPropertyFailure = createAction(
  RegistrationActionTypes.LoadRegistrationPropertyFailure,
  props<{ property: string, propertyError: any }>()
);

// form
export const SubmitRegistrationForm = createAction(
  RegistrationActionTypes.SubmitRegistrationForm,
  props<{ formData: RegistrationFormModel }>()
);

export const SubmitRegistrationFormSuccess = createAction(
  RegistrationActionTypes.SubmitRegistrationFormSuccess,
  props<{ formResponse: any }>()
);

export const SubmitRegistrationFormFailure = createAction(
  RegistrationActionTypes.SubmitRegistrationFormFailure,
  props<{ formError: any }>()
);
