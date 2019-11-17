import { createSelector } from '@ngrx/store';
import { InstitutionState } from '../reducers/institution.reducer';

export const institutionState = state => state.institution;

export const getInstitutionList = createSelector(
  institutionState,
  (institution: InstitutionState) => institution.list
);
