import { createSelector } from '@ngrx/store';
import { InfoState } from '../reducers/info.reducer';

export const infoState = state => state.info;

export const getInfoProperty = createSelector(
  infoState,
  (info: InfoState, props) => info.properties[props.property]
);
