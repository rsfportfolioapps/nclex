import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { BlogService } from '../../services/blog.service';
import { BlogModel } from '../../models/blog.model';
import { LoadBlogListSuccess, LoadBlogList, LoadBlogListFailure } from '../actions/blog.action';

@Injectable()
export class BlogEffects {
  loadBlogList$ = createEffect(
    () => this.actions$.pipe(
      ofType(LoadBlogList),
      mergeMap(() => {
        return this.blogService$.getBlogs()
          .pipe(
            map((list: BlogModel[]) =>
              LoadBlogListSuccess({ list })
            ),
            catchError(error =>
              of(LoadBlogListFailure({ error }))
            )
          );
        }
      )
    )
  );

  constructor(
    private actions$: Actions,
    private blogService$: BlogService
  ) { }
}
