import { createAction, props } from '@ngrx/store';
import { FigureModel } from 'src/app/models/figure.model';

export enum FigureActionTypes {
  LoadFigureList = '[Figure] Load Figure List',
  LoadFigureListSuccess = '[Figure] Load Figure List (success)',
  LoadFigureListFailure = '[Figure] Load Figure List (failure)'
}

export const LoadFigureList = createAction(
  FigureActionTypes.LoadFigureList
);

export const LoadFigureListSuccess = createAction(
  FigureActionTypes.LoadFigureListSuccess,
  props<{ list: FigureModel[] }>()
);

export const LoadFigureListFailure = createAction(
  FigureActionTypes.LoadFigureListFailure,
  props<{ error: any }>()
);
