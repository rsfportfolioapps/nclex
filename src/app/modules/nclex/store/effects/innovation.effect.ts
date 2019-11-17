import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { InnovationModel } from '../../models/innovation.model';
import { InnovationService } from '../../services/innovation.service';
import {
  LoadInnovationListSuccess,
  LoadInnovationList,
  LoadInnovationListFailure,
  LoadInnovationPropertySuccess,
  LoadInnovationPropertyFailure,
  LoadInnovationProperty
} from '../actions/innovation.action';

@Injectable()
export class InnovationEffects {
  // list
  loadInnovationList$ = createEffect(
    () => this.actions$.pipe(
      ofType(LoadInnovationList),
      mergeMap(() => {
        return this.innovationService$.getInnovations()
          .pipe(
            map((innovations: InnovationModel[]) =>
              LoadInnovationListSuccess({ list: innovations })
            ),
            catchError(error =>
              of(LoadInnovationListFailure({ error }))
            )
          );
        }
      )
    )
  );

  // property
  loadInnovationProperty$ = createEffect(
    () => this.actions$.pipe(
      ofType(LoadInnovationProperty),
      mergeMap(({ property }) => {
        return this.innovationService$.getProperty(property)
          .pipe(
            map((propertyValue) =>
              LoadInnovationPropertySuccess({ property, propertyValue })
            ),
            catchError(propertyError =>
              of(LoadInnovationPropertyFailure({ property, propertyError }))
            )
          );
        }
      )
    )
  );

  constructor(
    private actions$: Actions,
    private innovationService$: InnovationService
  ) { }
}
