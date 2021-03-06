import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, delay, filter, map, tap } from 'rxjs/operators';
import { of, throwError } from 'rxjs';
import { ModalService } from 'src/app/shared/modal/modal.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = environment.baseUrl + '/api';

  constructor(
    private http: HttpClient,
    private modalService: ModalService
  ) { }

  post(url: string, payload: object, options={}) {
    return this.http.post<any>(`${this.baseUrl}${url}`, payload, options);
  }

  get(url: string) {
    return this.http.get<any>(`${this.baseUrl}${url}`).pipe(
      map(res => res.data || res));
  }

  patch(url: string, payload: object) {
    return this.http.patch<any>(`${this.baseUrl}${url}`, payload);
  }

  delete(url: string) {
    return this.http.delete<any>(`${this.baseUrl}${url}`);
  }

  errorHandler(modalService, err) {
    const content = [
      { title: 'Error' },
      { html: '<p>Got the following error:</p>' },
    ];
    for (let key in err) {
      const mssg = `<p><strong>${key}</strong>: ${JSON.stringify(err[key])}</p>`;
      content.push({html: mssg});
    }
    const modal = {type: 'extended', content};
    const location = {action: 'set', stack: ['Unhandled Error']};
    modalService.open(modal, location);
    return of(null);
  }
}
