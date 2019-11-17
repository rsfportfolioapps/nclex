import { createSelector } from '@ngrx/store';
import { ImprovementState } from '../reducers/improvement.reducer';

export const improvementState = state => state.improvement;

export const getImprovementList = createSelector(
  improvementState,
  (improvement: ImprovementState) => improvement.list
);

export const getImprovementProperty = createSelector(
  improvementState,
  (improvement: ImprovementState, props) => improvement.properties[props.property]
);
