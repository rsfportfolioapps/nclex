import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { PlanModel } from '../../models/plan.model';
import { PlanService } from '../../services/plan.service';
import {
  LoadPlanList,
  LoadPlanListSuccess,
  LoadPlanListFailure,
  LoadPlanProperty,
  LoadPlanPropertySuccess,
  LoadPlanPropertyFailure
  } from '../actions/plan.action';

@Injectable()
export class PlanEffects {
  // list
  loadPlanList$ = createEffect(
    () => this.actions$.pipe(
      ofType(LoadPlanList),
      mergeMap(() => {
        return this.planService$.getPlans()
          .pipe(
            map((plans: PlanModel[]) =>
              LoadPlanListSuccess({ list: plans })
            ),
            catchError(error =>
              of(LoadPlanListFailure({ error }))
            )
          );
        }
      )
    )
  );

  // property
  loadPlanProperty$ = createEffect(
    () => this.actions$.pipe(
      ofType(LoadPlanProperty),
      mergeMap(({ property }) => {
        return this.planService$.getProperty(property)
          .pipe(
            map((propertyValue) =>
              LoadPlanPropertySuccess({ property, propertyValue })
            ),
            catchError(propertyError =>
              of(LoadPlanPropertyFailure({ property, propertyError }))
            )
          );
        }
      )
    )
  );

  constructor(
    private actions$: Actions,
    private planService$: PlanService
  ) { }
}
