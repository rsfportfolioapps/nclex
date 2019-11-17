import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export abstract class BaseService {
  constructor(private http: HttpClient) { }

  protected getAPIBase(route: string = ''): string {
    return environment.baseUrl + route;
  }

  private getToken(): string {
    return JSON.parse(localStorage.getItem('user')) ?
           JSON.parse(localStorage.getItem('user')).Token : '';
  }

  protected commonHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${this.getToken()}`,
    });
  }

  protected get(route: string): Observable<any> {
    const url = this.getAPIBase() + route;

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.getToken()}`,
      Accept: 'application/json'
    });

    const options = { headers };
    return this.http.get(url, options);
  }

  protected post(route: string, object: any): Observable<any> {
    return this.http.post(this.getAPIBase(route), object, { headers: this.commonHeaders()});
  }

  protected delete(route: string): any {
    return this.http.delete(this.getAPIBase(route), {
      headers: this.commonHeaders()
    });
  }

  protected put(route: string, object: any): Observable<any> {
    return this.http.put(this.getAPIBase(route), object, { headers: this.commonHeaders() }
    );
  }

  public handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
