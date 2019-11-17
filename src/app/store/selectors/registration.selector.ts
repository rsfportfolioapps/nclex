import { createSelector } from '@ngrx/store';
import { RegistrationState } from '../reducers/registration.reducer';

export const registrationState = state => state.registration;

export const getRegistrationProperty = createSelector(
  registrationState,
  (registration: RegistrationState, props) => registration.properties[props.property]
);
