import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { RegistrationService } from 'src/app/services/registration.service';
import {
  LoadRegistrationPropertySuccess,
  LoadRegistrationPropertyFailure,
  LoadRegistrationProperty,
  SubmitRegistrationForm,
  SubmitRegistrationFormSuccess,
  SubmitRegistrationFormFailure
} from '../actions/registration.action';

@Injectable()
export class RegistrationEffects {
  // property
  loadRegistrationProperty$ = createEffect(
    () => this.actions$.pipe(
      ofType(LoadRegistrationProperty),
      mergeMap(({ property, page }) => {
        return this.registrationService$.getProperty(property, page)
          .pipe(
            map((propertyValue) =>
              LoadRegistrationPropertySuccess({ property, propertyValue })
            ),
            catchError(propertyError =>
              of(LoadRegistrationPropertyFailure({ property, propertyError }))
            )
          );
        }
      )
    )
  );

  // form
  submitRegistrationForm$ = createEffect(
    () => this.actions$.pipe(
      ofType(SubmitRegistrationForm),
      mergeMap(({ formData }) => {
        return this.registrationService$.submitRegistrationForm(formData)
          .pipe(
            map(formResponse =>
              SubmitRegistrationFormSuccess({ formResponse })
            ),
            catchError(formError =>
              of(SubmitRegistrationFormFailure({ formError }))
            )
          );
        }
      )
    )
  );

  constructor(
    private actions$: Actions,
    private registrationService$: RegistrationService
  ) { }
}
