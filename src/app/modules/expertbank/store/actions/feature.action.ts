import { createAction, props } from '@ngrx/store';
import { FeatureModel } from '../../models/feature.model';

export enum FeatureActionTypes {
  // list
  LoadFeatureList = '[Feature] Load Feature List',
  LoadFeatureListSuccess = '[Feature] Load Feature List (success)',
  LoadFeatureListFailure = '[Feature] Load Feature List (failure)',

  // property
  LoadFeatureProperty = '[Feature] Load Feature Property',
  LoadFeaturePropertySuccess = '[Feature] Load Feature Property (success)',
  LoadFeaturePropertyFailure = '[Feature] Load Feature Property (failure)'
}

// list
export const LoadFeatureList = createAction(
  FeatureActionTypes.LoadFeatureList
);

export const LoadFeatureListSuccess = createAction(
  FeatureActionTypes.LoadFeatureListSuccess,
  props<{ list: FeatureModel[] }>()
);

export const LoadFeatureListFailure = createAction(
  FeatureActionTypes.LoadFeatureListFailure,
  props<{ error: any }>()
);

// property
export const LoadFeatureProperty = createAction(
  FeatureActionTypes.LoadFeatureProperty,
  props<{ property: string }>()
);

export const LoadFeaturePropertySuccess = createAction(
  FeatureActionTypes.LoadFeaturePropertySuccess,
  props<{ property: string, propertyValue: string }>()
);

export const LoadFeaturePropertyFailure = createAction(
  FeatureActionTypes.LoadFeaturePropertyFailure,
  props<{ property: string, propertyError: any }>()
);
