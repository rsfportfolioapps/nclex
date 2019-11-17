import { createAction, props } from '@ngrx/store';
import { ExpertbankModel } from 'src/app/models/expertbank.model';

export enum ExpertbankActionTypes {
  // list
  LoadExpertbankList = '[Expertbank] Load Expertbank List',
  LoadExpertbankListSuccess = '[Expertbank] Load Expertbank List (success)',
  LoadExpertbankListFailure = '[Expertbank] Load Expertbank List (failure)',

  // property
  LoadExpertbankProperty = '[Expertbank] Load Expertbank Property',
  LoadExpertbankPropertySuccess = '[Expertbank] Load Expertbank Property (success)',
  LoadExpertbankPropertyFailure = '[Expertbank] Load Expertbank Property (failure)'
}

// list
export const LoadExpertbankList = createAction(
  ExpertbankActionTypes.LoadExpertbankList
);

export const LoadExpertbankListSuccess = createAction(
  ExpertbankActionTypes.LoadExpertbankListSuccess,
  props<{ list: ExpertbankModel[] }>()
);

export const LoadExpertbankListFailure = createAction(
  ExpertbankActionTypes.LoadExpertbankListFailure,
  props<{ error: any }>()
);

// property
export const LoadExpertbankProperty = createAction(
  ExpertbankActionTypes.LoadExpertbankProperty,
  props<{ property: string }>()
);

export const LoadExpertbankPropertySuccess = createAction(
  ExpertbankActionTypes.LoadExpertbankPropertySuccess,
  props<{ property: string, propertyValue: string }>()
);

export const LoadExpertbankPropertyFailure = createAction(
  ExpertbankActionTypes.LoadExpertbankPropertyFailure,
  props<{ property: string, propertyError: any }>()
);
