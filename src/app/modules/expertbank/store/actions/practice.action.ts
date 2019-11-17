import { createAction, props } from '@ngrx/store';

export enum PracticeActionTypes {
  // property
  LoadPracticeProperty = '[Practice] Load Practice Property',
  LoadPracticePropertySuccess = '[Practice] Load Practice Property (success)',
  LoadPracticePropertyFailure = '[Practice] Load Practice Property (failure)'
}

// property
export const LoadPracticeProperty = createAction(
  PracticeActionTypes.LoadPracticeProperty,
  props<{ property: string }>()
);

export const LoadPracticePropertySuccess = createAction(
  PracticeActionTypes.LoadPracticePropertySuccess,
  props<{ property: string, propertyValue: string }>()
);

export const LoadPracticePropertyFailure = createAction(
  PracticeActionTypes.LoadPracticePropertyFailure,
  props<{ property: string, propertyError: any }>()
);
