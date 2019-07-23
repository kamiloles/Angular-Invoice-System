import { Component, OnInit } from '@angular/core';
import { ClientData } from '../services/client-data.service';
import { Invoice } from '../models/invoice';
import { InvoiceService } from '../services/invoices.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {

  invoices: ClientData[] = [];
  invoice: Invoice;

  isInvoicesDataLoading: boolean;


  constructor(private invoiceDataService: InvoiceService) {}

  getInvoices() {
    this.isInvoicesDataLoading = true;
    this.invoiceDataService.getInvoices().subscribe(data => {
      this.invoices = data;
      this.isInvoicesDataLoading = false;
    })
  }

  deleteInvoice(id: number) {
    this.invoiceDataService.deleteInvoice(id).subscribe(data => {
      this.getInvoices();
    })
  }

  ngOnInit() {
    this.getInvoices();
  }

}

//TODO: Edycja uzytkownikow, edycja faktur, dodanie nowego pola z plusem i przeliczanie(??), przypisanie faktury do uzytkownika, upiekszyc HOME
