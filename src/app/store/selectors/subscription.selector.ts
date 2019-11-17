import { createSelector } from '@ngrx/store';
import { SubscriptionState } from '../reducers/subscription.reducer';

export const subscriptionState = state => state.subscription;

export const getSubscriptionProperty = createSelector(
  subscriptionState,
  (subscription: SubscriptionState, props) => subscription.properties[props.property]
);
