import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { PracticeService } from '../../services/practice.service';
import {
  LoadPracticePropertySuccess,
  LoadPracticePropertyFailure,
  LoadPracticeProperty
} from '../actions/practice.action';

@Injectable()
export class PracticeEffects {
  // property
  loadPracticeProperty$ = createEffect(
    () => this.actions$.pipe(
      ofType(LoadPracticeProperty),
      mergeMap(({ property }) => {
        return this.practiceService$.getProperty(property)
          .pipe(
            map((propertyValue) =>
              LoadPracticePropertySuccess({ property, propertyValue })
            ),
            catchError(propertyError =>
              of(LoadPracticePropertyFailure({ property, propertyError }))
            )
          );
        }
      )
    )
  );

  constructor(
    private actions$: Actions,
    private practiceService$: PracticeService
  ) { }
}
