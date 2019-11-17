import { createSelector } from '@ngrx/store';
import { PreparationState } from '../reducers/preparation.reducer';

export const preparationState = state => state.preparation;

export const getPreparationList = createSelector(
  preparationState,
  (preparation: PreparationState) => preparation.list
);

export const getPreparationProperty = createSelector(
  preparationState,
  (preparation: PreparationState, props) => preparation.properties[props.property]
);
