import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { BaseService } from 'src/app/services/base.service';

@Injectable()
export class HeroService extends BaseService {

  private url = '/assets/data/heroes.json';

  getHero(page: string) {
    return this.get(this.url)
      .pipe(
        map(heroes => heroes[page]),
        catchError(this.handleError)
      );
  }

  constructor(private http$: HttpClient) {
    super(http$);
  }
}
