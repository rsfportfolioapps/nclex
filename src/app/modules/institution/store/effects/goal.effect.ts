import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { GoalModel } from '../../models/goal.model';
import { GoalService } from '../../services/goal.service';
import {
  LoadGoalListSuccess,
  LoadGoalList,
  LoadGoalListFailure,
  LoadGoalPropertySuccess,
  LoadGoalPropertyFailure,
  LoadGoalProperty
} from '../actions/goal.action';

@Injectable()
export class GoalEffects {
  // list
  loadGoalList$ = createEffect(
    () => this.actions$.pipe(
      ofType(LoadGoalList),
      mergeMap(() => {
        return this.goalService$.getGoals()
          .pipe(
            map((goals: GoalModel[]) =>
              LoadGoalListSuccess({ list: goals })
            ),
            catchError(error =>
              of(LoadGoalListFailure({ error }))
            )
          );
        }
      )
    )
  );

  // property
  loadGoalProperty$ = createEffect(
    () => this.actions$.pipe(
      ofType(LoadGoalProperty),
      mergeMap(({ property }) => {
        return this.goalService$.getProperty(property)
          .pipe(
            map((propertyValue) =>
              LoadGoalPropertySuccess({ property, propertyValue })
            ),
            catchError(propertyError =>
              of(LoadGoalPropertyFailure({ property, propertyError }))
            )
          );
        }
      )
    )
  );

  constructor(
    private actions$: Actions,
    private goalService$: GoalService
  ) { }
}
