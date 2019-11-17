import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { BaseService } from './base.service';

@Injectable()
export class FigureService extends BaseService {
  private url = '/assets/data/figures.json';

  getFigures() {
    return this.get(this.url)
      .pipe(
        catchError(this.handleError)
      );
  }

  constructor(private http$: HttpClient) {
    super(http$);
  }
}
