import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { BenefitModel } from '../../models/benefit.model';
import { BenefitService } from '../../services/benefit.service';
import {
  LoadBenefitListSuccess,
  LoadBenefitList,
  LoadBenefitListFailure,
  LoadBenefitPropertySuccess,
  LoadBenefitPropertyFailure,
  LoadBenefitProperty
} from '../actions/benefit.action';

@Injectable()
export class BenefitEffects {
  // list
  loadBenefitList$ = createEffect(
    () => this.actions$.pipe(
      ofType(LoadBenefitList),
      mergeMap(() => {
        return this.benefitService$.getBenefits()
          .pipe(
            map((benefits: BenefitModel[]) =>
              LoadBenefitListSuccess({ list: benefits })
            ),
            catchError(error =>
              of(LoadBenefitListFailure({ error }))
            )
          );
        }
      )
    )
  );

  // property
  loadBenefitProperty$ = createEffect(
    () => this.actions$.pipe(
      ofType(LoadBenefitProperty),
      mergeMap(({ property }) => {
        return this.benefitService$.getProperty(property)
          .pipe(
            map((propertyValue) =>
              LoadBenefitPropertySuccess({ property, propertyValue })
            ),
            catchError(propertyError =>
              of(LoadBenefitPropertyFailure({ property, propertyError }))
            )
          );
        }
      )
    )
  );

  constructor(
    private actions$: Actions,
    private benefitService$: BenefitService
  ) { }
}
