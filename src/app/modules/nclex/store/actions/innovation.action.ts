import { createAction, props } from '@ngrx/store';
import { InnovationModel } from '../../models/innovation.model';

export enum InnovationActionTypes {
  // list
  LoadInnovationList = '[Innovation] Load Innovation List',
  LoadInnovationListSuccess = '[Innovation] Load Innovation List (success)',
  LoadInnovationListFailure = '[Innovation] Load Innovation List (failure)',

  // property
  LoadInnovationProperty = '[Innovation] Load Innovation Property',
  LoadInnovationPropertySuccess = '[Innovation] Load Innovation Property (success)',
  LoadInnovationPropertyFailure = '[Innovation] Load Innovation Property (failure)'
}

// list
export const LoadInnovationList = createAction(
  InnovationActionTypes.LoadInnovationList
);

export const LoadInnovationListSuccess = createAction(
  InnovationActionTypes.LoadInnovationListSuccess,
  props<{ list: InnovationModel[] }>()
);

export const LoadInnovationListFailure = createAction(
  InnovationActionTypes.LoadInnovationListFailure,
  props<{ error: any }>()
);

// property
export const LoadInnovationProperty = createAction(
  InnovationActionTypes.LoadInnovationProperty,
  props<{ property: string }>()
);

export const LoadInnovationPropertySuccess = createAction(
  InnovationActionTypes.LoadInnovationPropertySuccess,
  props<{ property: string, propertyValue: string }>()
);

export const LoadInnovationPropertyFailure = createAction(
  InnovationActionTypes.LoadInnovationPropertyFailure,
  props<{ property: string, propertyError: any }>()
);
