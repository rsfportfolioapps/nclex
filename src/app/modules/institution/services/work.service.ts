import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class WorkService extends BaseService {
  private url = '/assets/data/works.json';
  private propertyUrl = '/assets/data/work.json';

  getWorks() {
    return this.get(this.url)
      .pipe(
        catchError(this.handleError)
      );
  }

  getProperty(property: string) {
    return this.get(this.propertyUrl)
      .pipe(
        map((data) => data[property]),
        catchError(this.handleError)
      );
  }

  constructor(private http$: HttpClient) {
    super(http$);
  }
}
