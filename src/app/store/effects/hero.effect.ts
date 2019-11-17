import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { HeroService } from 'src/app/services/hero.service';
import { HeroModel } from 'src/app/models/hero.model';
import { PostMessageService } from 'src/app/services/post-message.service';
import { LoadHero, LoadHeroSuccess, LoadHeroFailure, PreviewHero, PreviewHeroSuccess } from '../actions/hero.action';
import { SendPostMessageSuccess, SendPostMessageFailure } from '../actions/post-message.action';

@Injectable()
export class HeroEffects {
  loadHero$ = createEffect(
    () => this.actions$.pipe(
      ofType(LoadHero),
      mergeMap(({ page }) => {
        return this.heroService$.getHero(page)
          .pipe(
            map((hero: HeroModel) =>
              LoadHeroSuccess({ hero, page })
            ),
            catchError(error =>
              of(LoadHeroFailure({ error }))
            )
          );
        }
      )
    )
  );

  // admin
  previewHero$ = createEffect(
    () => this.actions$.pipe(
      ofType(PreviewHero),
      mergeMap(({ page, hero }) => {
        return this.postMessageService$.observableSendMessage({ page, hero, type: PreviewHeroSuccess.type })
          .pipe(
            map((metadata) => SendPostMessageSuccess({ metadata })),
            catchError(error =>
              of(SendPostMessageFailure({ error }))
            )
          );
        }
      )
    )
  );

  constructor(
    private actions$: Actions,
    private heroService$: HeroService,
    private postMessageService$: PostMessageService
  ) { }
}
