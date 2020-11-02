import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, delay } from 'rxjs/operators';
import { ModalService } from '../shared/modal/modal.service';
import { of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = environment.baseUrl + '/api';

  constructor(
    private http: HttpClient,
    private modal: ModalService
  ) { }

  post(url: string, payload: object, options={}) {
    return this.http.post<any>(`${this.baseUrl}${url}`, payload, options)
      .pipe(catchError(this.errorHandler));
  }

  get(url: string) {
    return this.http.get<any>(`${this.baseUrl}${url}`)
      .pipe(catchError(this.errorHandler));
  }

  patch(url: string, payload: object) {
    return this.http.patch<any>(`${this.baseUrl}${url}`, payload)
      .pipe(catchError(this.errorHandler));
  }

  delete(url: string) {
    return this.http.delete<any>(`${this.baseUrl}${url}`)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(err) {
    const content = [
      {
        html: '<div>Got an error:</div>'
      },
      {
        html:  `<p>${err}</p>`
      }
    ]
    // this.modal.open('extended', content);
    console.error('Error amigo')
    return of(null);
  }
}
