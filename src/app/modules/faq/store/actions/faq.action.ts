import { createAction, props } from '@ngrx/store';
import { FaqModel } from '../../models/faq.model';

export enum FaqActionTypes {
  // list
  LoadFaqList = '[Faq] Load Faq List',
  LoadFaqListSuccess = '[Faq] Load Faq List (success)',
  LoadFaqListFailure = '[Faq] Load Faq List (failure)'
}

// list
export const LoadFaqList = createAction(
  FaqActionTypes.LoadFaqList
);

export const LoadFaqListSuccess = createAction(
  FaqActionTypes.LoadFaqListSuccess,
  props<{ list: FaqModel[] }>()
);

export const LoadFaqListFailure = createAction(
  FaqActionTypes.LoadFaqListFailure,
  props<{ error: any }>()
);
