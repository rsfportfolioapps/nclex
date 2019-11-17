import { createSelector } from '@ngrx/store';
import { AdvantageState } from '../reducers/advantage.reducer';

export const advantageState = state => state.advantage;

export const getAdvantageList = createSelector(
  advantageState,
  (advantage: AdvantageState) => advantage.list
);

export const getAdvantageProperty = createSelector(
  advantageState,
  (advantage: AdvantageState, props) => advantage.properties[props.property]
);
