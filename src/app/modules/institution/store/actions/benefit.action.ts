import { createAction, props } from '@ngrx/store';
import { BenefitModel } from '../../models/benefit.model';

export enum BenefitActionTypes {
  // list
  LoadBenefitList = '[Benefit] Load Benefit List',
  LoadBenefitListSuccess = '[Benefit] Load Benefit List (success)',
  LoadBenefitListFailure = '[Benefit] Load Benefit List (failure)',

  // property
  LoadBenefitProperty = '[Benefit] Load Benefit Property',
  LoadBenefitPropertySuccess = '[Benefit] Load Benefit Property (success)',
  LoadBenefitPropertyFailure = '[Benefit] Load Benefit Property (failure)'
}

// list
export const LoadBenefitList = createAction(
  BenefitActionTypes.LoadBenefitList
);

export const LoadBenefitListSuccess = createAction(
  BenefitActionTypes.LoadBenefitListSuccess,
  props<{ list: BenefitModel[] }>()
);

export const LoadBenefitListFailure = createAction(
  BenefitActionTypes.LoadBenefitListFailure,
  props<{ error: any }>()
);

// property
export const LoadBenefitProperty = createAction(
  BenefitActionTypes.LoadBenefitProperty,
  props<{ property: string }>()
);

export const LoadBenefitPropertySuccess = createAction(
  BenefitActionTypes.LoadBenefitPropertySuccess,
  props<{ property: string, propertyValue: string }>()
);

export const LoadBenefitPropertyFailure = createAction(
  BenefitActionTypes.LoadBenefitPropertyFailure,
  props<{ property: string, propertyError: any }>()
);
