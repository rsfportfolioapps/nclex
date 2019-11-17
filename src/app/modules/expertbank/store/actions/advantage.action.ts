import { createAction, props } from '@ngrx/store';
import { AdvantageModel } from '../../models/advantage.model';

export enum AdvantageActionTypes {
  // list
  LoadAdvantageList = '[Advantage] Load Advantage List',
  LoadAdvantageListSuccess = '[Advantage] Load Advantage List (success)',
  LoadAdvantageListFailure = '[Advantage] Load Advantage List (failure)',

  // property
  LoadAdvantageProperty = '[Advantage] Load Advantage Property',
  LoadAdvantagePropertySuccess = '[Advantage] Load Advantage Property (success)',
  LoadAdvantagePropertyFailure = '[Advantage] Load Advantage Property (failure)'
}

// list
export const LoadAdvantageList = createAction(
  AdvantageActionTypes.LoadAdvantageList
);

export const LoadAdvantageListSuccess = createAction(
  AdvantageActionTypes.LoadAdvantageListSuccess,
  props<{ list: AdvantageModel[] }>()
);

export const LoadAdvantageListFailure = createAction(
  AdvantageActionTypes.LoadAdvantageListFailure,
  props<{ error: any }>()
);

// property
export const LoadAdvantageProperty = createAction(
  AdvantageActionTypes.LoadAdvantageProperty,
  props<{ property: string }>()
);

export const LoadAdvantagePropertySuccess = createAction(
  AdvantageActionTypes.LoadAdvantagePropertySuccess,
  props<{ property: string, propertyValue: string }>()
);

export const LoadAdvantagePropertyFailure = createAction(
  AdvantageActionTypes.LoadAdvantagePropertyFailure,
  props<{ property: string, propertyError: any }>()
);
