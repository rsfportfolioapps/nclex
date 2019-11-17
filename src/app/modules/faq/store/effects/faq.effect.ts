import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { FaqModel } from '../../models/faq.model';
import { FaqService } from '../../services/faq.service';
import { LoadFaqListSuccess, LoadFaqList, LoadFaqListFailure } from '../actions/faq.action';

@Injectable()
export class FaqEffects {
  // list
  loadFaqList$ = createEffect(
    () => this.actions$.pipe(
      ofType(LoadFaqList),
      mergeMap(() => {
        return this.faqService$.getFaqs()
          .pipe(
            map((faqs: FaqModel[]) =>
              LoadFaqListSuccess({ list: faqs })
            ),
            catchError(error =>
              of(LoadFaqListFailure({ error }))
            )
          );
        }
      )
    )
  );

  constructor(
    private actions$: Actions,
    private faqService$: FaqService
  ) { }
}
