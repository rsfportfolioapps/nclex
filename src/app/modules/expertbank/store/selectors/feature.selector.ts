import { createSelector } from '@ngrx/store';
import { FeatureState } from '../reducers/feature.reducer';

export const featureState = state => state.feature;

export const getFeatureList = createSelector(
  featureState,
  (feature: FeatureState) => feature.list
);

export const getFeatureProperty = createSelector(
  featureState,
  (feature: FeatureState, props) => feature.properties[props.property]
);
