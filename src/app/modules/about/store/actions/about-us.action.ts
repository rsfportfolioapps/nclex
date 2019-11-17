import { createAction, props } from '@ngrx/store';
import { AboutUsModel } from '../../models/about-us.model';

export enum AboutUsActionTypes {
  LoadAboutUsList = '[AboutUs] Load AboutUs List',
  LoadAboutUsListSuccess = '[AboutUs] Load AboutUs List (success)',
  LoadAboutUsListFailure = '[AboutUs] Load AboutUs List (failure)'
}

export const LoadAboutUsList = createAction(
  AboutUsActionTypes.LoadAboutUsList
);

export const LoadAboutUsListSuccess = createAction(
  AboutUsActionTypes.LoadAboutUsListSuccess,
  props<{ list: AboutUsModel[] }>()
);

export const LoadAboutUsListFailure = createAction(
  AboutUsActionTypes.LoadAboutUsListFailure,
  props<{ error: any }>()
);
