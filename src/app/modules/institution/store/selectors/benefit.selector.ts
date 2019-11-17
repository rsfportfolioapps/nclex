import { createSelector } from '@ngrx/store';
import { BenefitState } from '../reducers/benefit.reducer';

export const benefitState = state => state.benefit;

export const getBenefitList = createSelector(
  benefitState,
  (benefit: BenefitState) => benefit.list
);

export const getBenefitProperty = createSelector(
  benefitState,
  (benefit: BenefitState, props) => benefit.properties[props.property]
);
