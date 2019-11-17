import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { PerformanceService } from '../../services/performance.service';
import {
  LoadPerformancePropertySuccess,
  LoadPerformancePropertyFailure,
  LoadPerformanceProperty
} from '../actions/performance.action';

@Injectable()
export class PerformanceEffects {
  // property
  loadPerformanceProperty$ = createEffect(
    () => this.actions$.pipe(
      ofType(LoadPerformanceProperty),
      mergeMap(({ property }) => {
        return this.performanceService$.getProperty(property)
          .pipe(
            map((propertyValue) =>
              LoadPerformancePropertySuccess({ property, propertyValue })
            ),
            catchError(propertyError =>
              of(LoadPerformancePropertyFailure({ property, propertyError }))
            )
          );
        }
      )
    )
  );

  constructor(
    private actions$: Actions,
    private performanceService$: PerformanceService
  ) { }
}
