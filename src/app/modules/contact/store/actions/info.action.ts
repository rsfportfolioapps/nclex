import { createAction, props } from '@ngrx/store';

export enum InfoActionTypes {
  // property
  LoadInfoProperty = '[Info] Load Info Property',
  LoadInfoPropertySuccess = '[Info] Load Info Property (success)',
  LoadInfoPropertyFailure = '[Info] Load Info Property (failure)'
}

// property
export const LoadInfoProperty = createAction(
  InfoActionTypes.LoadInfoProperty,
  props<{ property: string }>()
);

export const LoadInfoPropertySuccess = createAction(
  InfoActionTypes.LoadInfoPropertySuccess,
  props<{ property: string, propertyValue: string }>()
);

export const LoadInfoPropertyFailure = createAction(
  InfoActionTypes.LoadInfoPropertyFailure,
  props<{ property: string, propertyError: any }>()
);

