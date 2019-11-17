import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ImprovementModel } from '../../models/improvement.model';
import { ImprovementService } from '../../services/improvement.service';
import {
  LoadImprovementListSuccess,
  LoadImprovementList,
  LoadImprovementListFailure,
  LoadImprovementPropertySuccess,
  LoadImprovementPropertyFailure,
  LoadImprovementProperty
} from '../actions/improvement.action';

@Injectable()
export class ImprovementEffects {
  // list
  loadImprovementList$ = createEffect(
    () => this.actions$.pipe(
      ofType(LoadImprovementList),
      mergeMap(() => {
        return this.improvementService$.getImprovements()
          .pipe(
            map((improvements: ImprovementModel[]) =>
              LoadImprovementListSuccess({ list: improvements })
            ),
            catchError(error =>
              of(LoadImprovementListFailure({ error }))
            )
          );
        }
      )
    )
  );

  // property
  loadImprovementProperty$ = createEffect(
    () => this.actions$.pipe(
      ofType(LoadImprovementProperty),
      mergeMap(({ property }) => {
        return this.improvementService$.getProperty(property)
          .pipe(
            map((propertyValue) =>
              LoadImprovementPropertySuccess({ property, propertyValue })
            ),
            catchError(propertyError =>
              of(LoadImprovementPropertyFailure({ property, propertyError }))
            )
          );
        }
      )
    )
  );

  constructor(
    private actions$: Actions,
    private improvementService$: ImprovementService
  ) { }
}
