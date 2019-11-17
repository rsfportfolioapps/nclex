import { createSelector } from '@ngrx/store';
import { FigureState } from '../reducers/figure.reducer';

export const figureState = state => state.figure;

export const getFigureList = createSelector(
  figureState,
  (figure: FigureState) => figure.list
);
