import { createSelector } from '@ngrx/store';
import { InnovationState } from '../reducers/innovation.reducer';

export const innovationState = state => state.innovation;

export const getInnovationList = createSelector(
  innovationState,
  (innovation: InnovationState) => innovation.list
);

export const getInnovationProperty = createSelector(
  innovationState,
  (innovation: InnovationState, props) => innovation.properties[props.property]
);
