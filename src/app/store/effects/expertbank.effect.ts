import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ExpertbankService } from 'src/app/services/expertbank.service';
import { ExpertbankModel } from 'src/app/models/expertbank.model';
import {
  LoadExpertbankListSuccess,
  LoadExpertbankList,
  LoadExpertbankListFailure,
  LoadExpertbankPropertySuccess,
  LoadExpertbankPropertyFailure,
  LoadExpertbankProperty
} from '../actions/expertbank.action';

@Injectable()
export class ExpertbankEffects {
  // list
  loadExpertbankList$ = createEffect(
    () => this.actions$.pipe(
      ofType(LoadExpertbankList),
      mergeMap(() => {
        return this.expertbankService$.getExpertbanks()
          .pipe(
            map((list: ExpertbankModel[]) =>
              LoadExpertbankListSuccess({ list })
            ),
            catchError(error =>
              of(LoadExpertbankListFailure({ error }))
            )
          );
        }
      )
    )
  );

  // property
  loadExpertbankProperty$ = createEffect(
    () => this.actions$.pipe(
      ofType(LoadExpertbankProperty),
      mergeMap(({ property }) => {
        return this.expertbankService$.getProperty(property)
          .pipe(
            map((propertyValue) =>
              LoadExpertbankPropertySuccess({ property, propertyValue })
            ),
            catchError(propertyError =>
              of(LoadExpertbankPropertyFailure({ property, propertyError }))
            )
          );
        }
      )
    )
  );

  constructor(
    private actions$: Actions,
    private expertbankService$: ExpertbankService
  ) { }
}
