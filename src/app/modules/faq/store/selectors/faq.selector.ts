import { createSelector } from '@ngrx/store';
import groupBy from 'lodash/groupBy';
import { FaqState } from '../reducers/faq.reducer';

export const faqState = state => state.faq;

export const getFaqList = createSelector(
  faqState,
  (faq: FaqState) => faq.list
);

export const getFaqGroupedByProperty = createSelector(
  faqState,
  (faq: FaqState, props) => groupBy(faq.list, props.property)
);
