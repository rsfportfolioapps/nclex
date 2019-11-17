import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { NewsService } from 'src/app/services/news.service';
import { NewsModel } from 'src/app/models/news.model';
import { LoadNewsListSuccess,
  LoadNewsList,
  LoadNewsListFailure,
  LoadNewsPropertySuccess,
  LoadNewsPropertyFailure,
  LoadNewsProperty
} from '../actions/news.action';

@Injectable()
export class NewsEffects {
  // list
  loadNewsList$ = createEffect(
    () => this.actions$.pipe(
      ofType(LoadNewsList),
      mergeMap(() => {
        return this.newsService$.getNews()
          .pipe(
            map((list: NewsModel[]) =>
              LoadNewsListSuccess({ list })
            ),
            catchError(error =>
              of(LoadNewsListFailure({ error }))
            )
          );
        }
      )
    )
  );

  // property
  loadNewsProperty$ = createEffect(
    () => this.actions$.pipe(
      ofType(LoadNewsProperty),
      mergeMap(({ property }) => {
        return this.newsService$.getProperty(property)
          .pipe(
            map((propertyValue) =>
              LoadNewsPropertySuccess({ property, propertyValue })
            ),
            catchError(propertyError =>
              of(LoadNewsPropertyFailure({ property, propertyError }))
            )
          );
        }
      )
    )
  );

  constructor(
    private actions$: Actions,
    private newsService$: NewsService
  ) { }
}
