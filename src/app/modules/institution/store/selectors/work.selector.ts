import { createSelector } from '@ngrx/store';
import { WorkState } from '../reducers/work.reducer';

export const workState = state => state.work;

export const getWorkList = createSelector(
  workState,
  (work: WorkState) => work.list
);

export const getWorkProperty = createSelector(
  workState,
  (work: WorkState, props) => work.properties[props.property]
);
