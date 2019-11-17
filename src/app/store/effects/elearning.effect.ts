import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ElearningService } from 'src/app/services/elearning.service';
import { ElearningModel } from 'src/app/models/elearning.model';
import {
  LoadElearningListSuccess,
  LoadElearningList,
  LoadElearningListFailure,
  LoadElearningPropertySuccess,
  LoadElearningPropertyFailure,
  LoadElearningProperty
} from '../actions/elearning.action';

@Injectable()
export class ElearningEffects {
  // list
  loadElearningList$ = createEffect(
    () => this.actions$.pipe(
      ofType(LoadElearningList),
      mergeMap(() => {
        return this.elearningService$.getElearnings()
          .pipe(
            map((list: ElearningModel[]) =>
              LoadElearningListSuccess({ list })
            ),
            catchError(error =>
              of(LoadElearningListFailure({ error }))
            )
          );
        }
      )
    )
  );

  // property
  loadElearningProperty$ = createEffect(
    () => this.actions$.pipe(
      ofType(LoadElearningProperty),
      mergeMap(({ property }) => {
        return this.elearningService$.getProperty(property)
          .pipe(
            map((propertyValue) =>
              LoadElearningPropertySuccess({ property, propertyValue })
            ),
            catchError(propertyError =>
              of(LoadElearningPropertyFailure({ property, propertyError }))
            )
          );
        }
      )
    )
  );

  constructor(
    private actions$: Actions,
    private elearningService$: ElearningService
  ) { }
}
