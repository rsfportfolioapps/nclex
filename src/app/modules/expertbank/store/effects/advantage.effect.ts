import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AdvantageModel } from '../../models/advantage.model';
import { AdvantageService } from '../../services/advantage.service';
import {
  LoadAdvantageListSuccess,
  LoadAdvantageList,
  LoadAdvantageListFailure,
  LoadAdvantagePropertySuccess,
  LoadAdvantagePropertyFailure,
  LoadAdvantageProperty
} from '../actions/advantage.action';

@Injectable()
export class AdvantageEffects {
  // list
  loadAdvantageList$ = createEffect(
    () => this.actions$.pipe(
      ofType(LoadAdvantageList),
      mergeMap(() => {
        return this.advantageService$.getAdvantages()
          .pipe(
            map((advantages: AdvantageModel[]) =>
              LoadAdvantageListSuccess({ list: advantages })
            ),
            catchError(error =>
              of(LoadAdvantageListFailure({ error }))
            )
          );
        }
      )
    )
  );

  // property
  loadAdvantageProperty$ = createEffect(
    () => this.actions$.pipe(
      ofType(LoadAdvantageProperty),
      mergeMap(({ property }) => {
        return this.advantageService$.getProperty(property)
          .pipe(
            map((propertyValue) =>
              LoadAdvantagePropertySuccess({ property, propertyValue })
            ),
            catchError(propertyError =>
              of(LoadAdvantagePropertyFailure({ property, propertyError }))
            )
          );
        }
      )
    )
  );

  constructor(
    private actions$: Actions,
    private advantageService$: AdvantageService
  ) { }
}
