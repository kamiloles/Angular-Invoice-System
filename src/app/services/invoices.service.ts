import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { Invoice } from '../models/invoice';
import { ClientData } from './client-data.service';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  apiUrl = 'api/invoices';
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  options = {
    headers: this.headers
  }

  constructor(private http: HttpClient) { }

  private handleError(error: any) {
    console.log(error);
    return throwError(error);
  }

  getInvoices(): Observable<any[]> {
    return this.http.get<ClientData[]>(this.apiUrl).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  deleteInvoice(id: number) {
    const url = `${this.apiUrl}/${id}`
    return this.http.delete<Invoice>(url, this.options).pipe(
      catchError(this.handleError)
    );
  }

  addInvoice(invoice: Invoice): Observable<Invoice> {
    return this.http.post<Invoice>(this.apiUrl, invoice, this.options).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    )
  }
}
