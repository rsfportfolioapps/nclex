import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService extends BaseService {
  private url = '/assets/data/about-us.json';

  getAboutUsList() {
    return this.get(this.url)
      .pipe(
        catchError(this.handleError)
      );
  }

  constructor(private http$: HttpClient) {
    super(http$);
  }
}
