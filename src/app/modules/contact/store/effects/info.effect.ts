import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { InfoService } from '../../services/info.service';
import { LoadInfoPropertySuccess, LoadInfoPropertyFailure, LoadInfoProperty } from '../actions/info.action';

@Injectable()
export class InfoEffects {
  // property
  loadInfoProperty$ = createEffect(
    () => this.actions$.pipe(
      ofType(LoadInfoProperty),
      mergeMap(({ property }) => {
        return this.infoService$.getProperty(property)
          .pipe(
            map((propertyValue) =>
              LoadInfoPropertySuccess({ property, propertyValue })
            ),
            catchError(propertyError =>
              of(LoadInfoPropertyFailure({ property, propertyError }))
            )
          );
        }
      )
    )
  );

  constructor(
    private actions$: Actions,
    private infoService$: InfoService
  ) { }
}
