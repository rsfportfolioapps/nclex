import { createAction, props } from '@ngrx/store';
import { PlanModel } from '../../models/plan.model';

export enum PlanActionTypes {
  // list
  LoadPlanList = '[Plan] Load Plan List',
  LoadPlanListSuccess = '[Plan] Load Plan List (success)',
  LoadPlanListFailure = '[Plan] Load Plan List (failure)',

  // property
  LoadPlanProperty = '[Plan] Load Plan Property',
  LoadPlanPropertySuccess = '[Plan] Load Plan Property (success)',
  LoadPlanPropertyFailure = '[Plan] Load Plan Property (failure)'
}

// list
export const LoadPlanList = createAction(
  PlanActionTypes.LoadPlanList
);

export const LoadPlanListSuccess = createAction(
  PlanActionTypes.LoadPlanListSuccess,
  props<{ list: PlanModel[] }>()
);

export const LoadPlanListFailure = createAction(
  PlanActionTypes.LoadPlanListFailure,
  props<{ error: any }>()
);

// property
export const LoadPlanProperty = createAction(
  PlanActionTypes.LoadPlanProperty,
  props<{ property: string }>()
);

export const LoadPlanPropertySuccess = createAction(
  PlanActionTypes.LoadPlanPropertySuccess,
  props<{ property: string, propertyValue: string }>()
);

export const LoadPlanPropertyFailure = createAction(
  PlanActionTypes.LoadPlanPropertyFailure,
  props<{ property: string, propertyError: any }>()
);
