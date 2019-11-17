import { createAction, props } from '@ngrx/store';
import { PreparationModel } from '../../models/preparation.model';

export enum PreparationActionTypes {
  // list
  LoadPreparationList = '[Preparation] Load Preparation List',
  LoadPreparationListSuccess = '[Preparation] Load Preparation List (success)',
  LoadPreparationListFailure = '[Preparation] Load Preparation List (failure)',

  // property
  LoadPreparationProperty = '[Preparation] Load Preparation Property',
  LoadPreparationPropertySuccess = '[Preparation] Load Preparation Property (success)',
  LoadPreparationPropertyFailure = '[Preparation] Load Preparation Property (failure)'
}

// list
export const LoadPreparationList = createAction(
  PreparationActionTypes.LoadPreparationList
);

export const LoadPreparationListSuccess = createAction(
  PreparationActionTypes.LoadPreparationListSuccess,
  props<{ list: PreparationModel[] }>()
);

export const LoadPreparationListFailure = createAction(
  PreparationActionTypes.LoadPreparationListFailure,
  props<{ error: any }>()
);

// property
export const LoadPreparationProperty = createAction(
  PreparationActionTypes.LoadPreparationProperty,
  props<{ property: string }>()
);

export const LoadPreparationPropertySuccess = createAction(
  PreparationActionTypes.LoadPreparationPropertySuccess,
  props<{ property: string, propertyValue: string }>()
);

export const LoadPreparationPropertyFailure = createAction(
  PreparationActionTypes.LoadPreparationPropertyFailure,
  props<{ property: string, propertyError: any }>()
);
