import { createAction, props } from '@ngrx/store';
import { ImprovementModel } from '../../models/improvement.model';

export enum ImprovementActionTypes {
  // list
  LoadImprovementList = '[Improvement] Load Improvement List',
  LoadImprovementListSuccess = '[Improvement] Load Improvement List (success)',
  LoadImprovementListFailure = '[Improvement] Load Improvement List (failure)',

  // property
  LoadImprovementProperty = '[Improvement] Load Improvement Property',
  LoadImprovementPropertySuccess = '[Improvement] Load Improvement Property (success)',
  LoadImprovementPropertyFailure = '[Improvement] Load Improvement Property (failure)'
}

// list
export const LoadImprovementList = createAction(
  ImprovementActionTypes.LoadImprovementList
);

export const LoadImprovementListSuccess = createAction(
  ImprovementActionTypes.LoadImprovementListSuccess,
  props<{ list: ImprovementModel[] }>()
);

export const LoadImprovementListFailure = createAction(
  ImprovementActionTypes.LoadImprovementListFailure,
  props<{ error: any }>()
);

// property
export const LoadImprovementProperty = createAction(
  ImprovementActionTypes.LoadImprovementProperty,
  props<{ property: string }>()
);

export const LoadImprovementPropertySuccess = createAction(
  ImprovementActionTypes.LoadImprovementPropertySuccess,
  props<{ property: string, propertyValue: string }>()
);

export const LoadImprovementPropertyFailure = createAction(
  ImprovementActionTypes.LoadImprovementPropertyFailure,
  props<{ property: string, propertyError: any }>()
);
