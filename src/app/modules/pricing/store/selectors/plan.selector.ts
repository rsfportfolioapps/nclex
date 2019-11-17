import { createSelector } from '@ngrx/store';
import { PlanState } from '../reducers/plan.reducer';

export const planState = state => state.plan;

export const getPlanList = createSelector(
  planState,
  (plan: PlanState) => plan.list
);

export const getPlanProperty = createSelector(
  planState,
  (plan: PlanState, props) => plan.properties[props.property]
);
