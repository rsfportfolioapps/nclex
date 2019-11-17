import { createAction, props } from '@ngrx/store';
import { GoalModel } from '../../models/goal.model';

export enum GoalActionTypes {
  // list
  LoadGoalList = '[Goal] Load Goal List',
  LoadGoalListSuccess = '[Goal] Load Goal List (success)',
  LoadGoalListFailure = '[Goal] Load Goal List (failure)',

  // property
  LoadGoalProperty = '[Goal] Load Goal Property',
  LoadGoalPropertySuccess = '[Goal] Load Goal Property (success)',
  LoadGoalPropertyFailure = '[Goal] Load Goal Property (failure)'
}

// list
export const LoadGoalList = createAction(
  GoalActionTypes.LoadGoalList
);

export const LoadGoalListSuccess = createAction(
  GoalActionTypes.LoadGoalListSuccess,
  props<{ list: GoalModel[] }>()
);

export const LoadGoalListFailure = createAction(
  GoalActionTypes.LoadGoalListFailure,
  props<{ error: any }>()
);

// property
export const LoadGoalProperty = createAction(
  GoalActionTypes.LoadGoalProperty,
  props<{ property: string }>()
);

export const LoadGoalPropertySuccess = createAction(
  GoalActionTypes.LoadGoalPropertySuccess,
  props<{ property: string, propertyValue: string }>()
);

export const LoadGoalPropertyFailure = createAction(
  GoalActionTypes.LoadGoalPropertyFailure,
  props<{ property: string, propertyError: any }>()
);
