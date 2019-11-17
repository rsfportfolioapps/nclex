import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { PreparationModel } from '../../models/preparation.model';
import { PreparationService } from '../../services/preparation.service';
import {
  LoadPreparationListSuccess,
  LoadPreparationList,
  LoadPreparationListFailure,
  LoadPreparationPropertySuccess,
  LoadPreparationPropertyFailure,
  LoadPreparationProperty
} from '../actions/preparation.action';

@Injectable()
export class PreparationEffects {
  // list
  loadPreparationList$ = createEffect(
    () => this.actions$.pipe(
      ofType(LoadPreparationList),
      mergeMap(() => {
        return this.preparationService$.getPreparations()
          .pipe(
            map((preparations: PreparationModel[]) =>
              LoadPreparationListSuccess({ list: preparations })
            ),
            catchError(error =>
              of(LoadPreparationListFailure({ error }))
            )
          );
        }
      )
    )
  );

  // property
  loadPreparationProperty$ = createEffect(
    () => this.actions$.pipe(
      ofType(LoadPreparationProperty),
      mergeMap(({ property }) => {
        return this.preparationService$.getProperty(property)
          .pipe(
            map((propertyValue) =>
              LoadPreparationPropertySuccess({ property, propertyValue })
            ),
            catchError(propertyError =>
              of(LoadPreparationPropertyFailure({ property, propertyError }))
            )
          );
        }
      )
    )
  );

  constructor(
    private actions$: Actions,
    private preparationService$: PreparationService
  ) { }
}
