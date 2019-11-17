import { createSelector } from '@ngrx/store';
import { PerformanceState } from '../reducers/performance.reducer';

export const performanceState = state => state.performance;

export const getPerformanceProperty = createSelector(
  performanceState,
  (performance: PerformanceState, props) => performance.properties[props.property]
);
