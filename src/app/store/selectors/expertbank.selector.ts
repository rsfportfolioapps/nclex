import { createSelector } from '@ngrx/store';
import { ExpertbankState } from '../reducers/expertbank.reducer';

export const expertbankState = state => state.expertbank;

export const getExpertbankList = createSelector(
  expertbankState,
  (expertbank: ExpertbankState) => expertbank.list
);

export const getExpertbankProperty = createSelector(
  expertbankState,
  (expertbank: ExpertbankState, props) => expertbank.properties[props.property]
);
