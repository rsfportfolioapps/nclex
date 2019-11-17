import { createSelector } from '@ngrx/store';
import { ElearningState } from '../reducers/elearning.reducer';

export const elearningState = state => state.elearning;

export const getElearningList = createSelector(
  elearningState,
  (elearning: ElearningState) => elearning.list
);

export const getElearningProperty = createSelector(
  elearningState,
  (elearning: ElearningState, props) => elearning.properties[props.property]
);
