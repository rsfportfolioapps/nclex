import { createAction, props } from '@ngrx/store';
import { SubscriptionFormModel } from 'src/app/models/subscription-form.model';

export enum SubscriptionActionTypes {
  // property
  LoadSubscriptionProperty = '[Subscription] Load Subscription Property',
  LoadSubscriptionPropertySuccess = '[Subscription] Load Subscription Property (success)',
  LoadSubscriptionPropertyFailure = '[Subscription] Load Subscription Property (failure)',

  SubmitSubscriptionForm = '[Subscription] Submit Subscription Form',
  SubmitSubscriptionFormSuccess = '[Subscription] Submit Subscription Form (success)',
  SubmitSubscriptionFormFailure = '[Subscription] Submit Subscription Form (failure)',
}

// property
export const LoadSubscriptionProperty = createAction(
  SubscriptionActionTypes.LoadSubscriptionProperty,
  props<{ property: string }>()
);

export const LoadSubscriptionPropertySuccess = createAction(
  SubscriptionActionTypes.LoadSubscriptionPropertySuccess,
  props<{ property: string, propertyValue: string }>()
);

export const LoadSubscriptionPropertyFailure = createAction(
  SubscriptionActionTypes.LoadSubscriptionPropertyFailure,
  props<{ property: string, propertyError: any }>()
);

// form
export const SubmitSubscriptionForm = createAction(
  SubscriptionActionTypes.SubmitSubscriptionForm,
  props<{ formData: SubscriptionFormModel }>()
);

export const SubmitSubscriptionFormSuccess = createAction(
  SubscriptionActionTypes.SubmitSubscriptionFormSuccess,
  props<{ formResponse: any }>()
);

export const SubmitSubscriptionFormFailure = createAction(
  SubscriptionActionTypes.SubmitSubscriptionFormFailure,
  props<{ formError: any }>()
);
