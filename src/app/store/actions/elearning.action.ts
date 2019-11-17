import { createAction, props } from '@ngrx/store';
import { ElearningModel } from 'src/app/models/elearning.model';

export enum ElearningActionTypes {
  // list
  LoadElearningList = '[Elearning] Load Elearning List',
  LoadElearningListSuccess = '[Elearning] Load Elearning List (success)',
  LoadElearningListFailure = '[Elearning] Load Elearning List (failure)',

  // property
  LoadElearningProperty = '[Elearning] Load Elearning Property',
  LoadElearningPropertySuccess = '[Elearning] Load Elearning Property (success)',
  LoadElearningPropertyFailure = '[Elearning] Load Elearning Property (failure)'
}

// list
export const LoadElearningList = createAction(
  ElearningActionTypes.LoadElearningList
);

export const LoadElearningListSuccess = createAction(
  ElearningActionTypes.LoadElearningListSuccess,
  props<{ list: ElearningModel[] }>()
);

export const LoadElearningListFailure = createAction(
  ElearningActionTypes.LoadElearningListFailure,
  props<{ error: any }>()
);

// property
export const LoadElearningProperty = createAction(
  ElearningActionTypes.LoadElearningProperty,
  props<{ property: string }>()
);

export const LoadElearningPropertySuccess = createAction(
  ElearningActionTypes.LoadElearningPropertySuccess,
  props<{ property: string, propertyValue: string }>()
);

export const LoadElearningPropertyFailure = createAction(
  ElearningActionTypes.LoadElearningPropertyFailure,
  props<{ property: string, propertyError: any }>()
);
