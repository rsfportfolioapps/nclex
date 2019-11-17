import { createSelector } from '@ngrx/store';
import { PracticeState } from '../reducers/practice.reducer';

export const practiceState = state => state.practice;

export const getPracticeProperty = createSelector(
  practiceState,
  (practice: PracticeState, props) => practice.properties[props.property]
);
