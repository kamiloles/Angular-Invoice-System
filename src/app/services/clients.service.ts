import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { ClientData } from '../services/client-data.service';
import { Client } from '../models/client';


@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  apiUrl = 'api/clients';
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  options = {
    headers: this.headers
  }

  constructor(private http: HttpClient) { }InvoicesService

  private handleError(error: any) {
    console.log(error);
    return throwError(error);
  }

  getClient(id: number): Observable<Client> {
    return this.http.get<Client>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  getClients(): Observable<any[]> {
    return this.http.get<ClientData[]>(this.apiUrl).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  getClientDetails(id: number): Observable<any> {
    return this.http.get<ClientData>(this.apiUrl);
  }

  addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.apiUrl, client, this.options).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    )
  }

  deleteClient(id: number) {
    const url = `${this.apiUrl}/${id}`
    return this.http.delete<Client>(url, this.options).pipe(
      catchError(this.handleError)
    );
  }

  updateClient(client: Client): Observable<any> {
    const url = `${this.apiUrl}/${1}`
    return this.http.put<Client>(url, client, this.options).pipe(
      map(() => client),
      catchError(this.handleError)
    );
  }
}
