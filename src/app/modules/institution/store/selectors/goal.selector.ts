import { createSelector } from '@ngrx/store';
import { GoalState } from '../reducers/goal.reducer';

export const goalState = state => state.goal;

export const getGoalList = createSelector(
  goalState,
  (goal: GoalState) => goal.list
);

export const getGoalProperty = createSelector(
  goalState,
  (goal: GoalState, props) => goal.properties[props.property]
);
