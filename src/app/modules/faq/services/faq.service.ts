import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class FaqService extends BaseService {
  private url = '/assets/data/faqs.json';

  getFaqs() {
    return this.get(this.url)
      .pipe(
        catchError(this.handleError)
      );
  }

  constructor(private http$: HttpClient) {
    super(http$);
  }
}

