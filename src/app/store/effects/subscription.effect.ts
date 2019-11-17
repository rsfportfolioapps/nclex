import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { SubscriptionService } from 'src/app/services/subscription.service';
import {
  LoadSubscriptionPropertySuccess,
  LoadSubscriptionPropertyFailure,
  LoadSubscriptionProperty,
  SubmitSubscriptionForm,
  SubmitSubscriptionFormSuccess,
  SubmitSubscriptionFormFailure
} from '../actions/subscription.action';

@Injectable()
export class SubscriptionEffects {
  // property
  loadSubscriptionProperty$ = createEffect(
    () => this.actions$.pipe(
      ofType(LoadSubscriptionProperty),
      mergeMap(({ property }) => {
        return this.subscriptionService$.getProperty(property)
          .pipe(
            map((propertyValue) =>
              LoadSubscriptionPropertySuccess({ property, propertyValue })
            ),
            catchError(propertyError =>
              of(LoadSubscriptionPropertyFailure({ property, propertyError }))
            )
          );
        }
      )
    )
  );

  // form
  submitSubscriptionForm$ = createEffect(
    () => this.actions$.pipe(
      ofType(SubmitSubscriptionForm),
      mergeMap(({ formData }) => {
        return this.subscriptionService$.submitSubscriptionForm(formData)
          .pipe(
            map(formResponse =>
              SubmitSubscriptionFormSuccess({ formResponse })
            ),
            catchError(formError =>
              of(SubmitSubscriptionFormFailure({ formError }))
            )
          );
        }
      )
    )
  );

  constructor(
    private actions$: Actions,
    private subscriptionService$: SubscriptionService
  ) { }
}
