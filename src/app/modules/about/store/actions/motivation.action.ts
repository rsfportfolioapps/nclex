import { createAction, props } from '@ngrx/store';
import { MotivationModel } from '../../models/motivation.model';

export enum MotivationActionTypes {
  LoadMotivationList = '[Motivation] Load Motivation List',
  LoadMotivationListSuccess = '[Motivation] Load Motivation List (success)',
  LoadMotivationListFailure = '[Motivation] Load Motivation List (failure)'
}

export const LoadMotivationList = createAction(
  MotivationActionTypes.LoadMotivationList
);

export const LoadMotivationListSuccess = createAction(
  MotivationActionTypes.LoadMotivationListSuccess,
  props<{ list: MotivationModel[] }>()
);

export const LoadMotivationListFailure = createAction(
  MotivationActionTypes.LoadMotivationListFailure,
  props<{ error: any }>()
);
