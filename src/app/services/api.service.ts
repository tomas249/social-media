import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = environment.baseUrl + '/api';

  constructor(
    private http: HttpClient
  ) { }

  post(url: string, payload: object, options={}) {
    return this.http.post<any>(`${this.baseUrl}${url}`, payload, options);
  }

  get(url: string) {
    return this.http.get<any>(`${this.baseUrl}${url}`);
  }

  patch(url: string, payload: object) {
    return this.http.patch<any>(`${this.baseUrl}${url}`, payload);
  }

  delete(url: string) {
    return this.http.delete<any>(`${this.baseUrl}${url}`);
  }
}
