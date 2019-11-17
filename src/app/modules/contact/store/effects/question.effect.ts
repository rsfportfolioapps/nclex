import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { QuestionService } from '../../services/question.service';
import {
  LoadQuestionPropertySuccess,
  LoadQuestionPropertyFailure,
  LoadQuestionProperty,
  SubmitQuestionForm,
  SubmitQuestionFormSuccess,
  SubmitQuestionFormFailure
} from '../actions/question.action';

@Injectable()
export class QuestionEffects {
  // property
  loadQuestionProperty$ = createEffect(
    () => this.actions$.pipe(
      ofType(LoadQuestionProperty),
      mergeMap(({ property }) => {
        return this.questionService$.getProperty(property)
          .pipe(
            map((propertyValue) =>
              LoadQuestionPropertySuccess({ property, propertyValue })
            ),
            catchError(propertyError =>
              of(LoadQuestionPropertyFailure({ property, propertyError }))
            )
          );
        }
      )
    )
  );

  // form
  submitQuestionForm$ = createEffect(
    () => this.actions$.pipe(
      ofType(SubmitQuestionForm),
      mergeMap(({ formData }) => {
        return this.questionService$.submitQuestionForm(formData)
          .pipe(
            map(formResponse =>
              SubmitQuestionFormSuccess({ formResponse })
            ),
            catchError(formError =>
              of(SubmitQuestionFormFailure({ formError }))
            )
          );
        }
      )
    )
  );

  constructor(
    private actions$: Actions,
    private questionService$: QuestionService
  ) { }
}
