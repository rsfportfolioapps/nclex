import { createAction, props } from '@ngrx/store';
import { WorkModel } from '../../models/work.model';

export enum WorkActionTypes {
  // list
  LoadWorkList = '[Work] Load Work List',
  LoadWorkListSuccess = '[Work] Load Work List (success)',
  LoadWorkListFailure = '[Work] Load Work List (failure)',

  // property
  LoadWorkProperty = '[Work] Load Work Property',
  LoadWorkPropertySuccess = '[Work] Load Work Property (success)',
  LoadWorkPropertyFailure = '[Work] Load Work Property (failure)'
}

// list
export const LoadWorkList = createAction(
  WorkActionTypes.LoadWorkList
);

export const LoadWorkListSuccess = createAction(
  WorkActionTypes.LoadWorkListSuccess,
  props<{ list: WorkModel[] }>()
);

export const LoadWorkListFailure = createAction(
  WorkActionTypes.LoadWorkListFailure,
  props<{ error: any }>()
);

// property
export const LoadWorkProperty = createAction(
  WorkActionTypes.LoadWorkProperty,
  props<{ property: string }>()
);

export const LoadWorkPropertySuccess = createAction(
  WorkActionTypes.LoadWorkPropertySuccess,
  props<{ property: string, propertyValue: string }>()
);

export const LoadWorkPropertyFailure = createAction(
  WorkActionTypes.LoadWorkPropertyFailure,
  props<{ property: string, propertyError: any }>()
);
