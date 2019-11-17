import { createSelector } from '@ngrx/store';
import { AccreditationState } from '../reducers/accreditation.reducer';

export const accreditationState = state => state.accreditation;

export const getAccreditationList = createSelector(
  accreditationState,
  (accreditation: AccreditationState) => accreditation.list
);

export const getAccreditationProperty = createSelector(
  accreditationState,
  (accreditation: AccreditationState, props) => accreditation.properties[props.property]
);
