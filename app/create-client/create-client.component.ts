import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../services/clients.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from '../models/client';
import { InvoiceService } from '../services/invoices.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {
  angForm: FormGroup;
  client: Client;
  invoices: ClientData[] = [];

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private clientDataService: ClientsService, private invoiceDataService: InvoiceService, private fb: FormBuilder, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      country: ['', Validators.required],
      nip: ['', Validators.compose([Validators.required, Validators.minLength(9), Validators.maxLength(9)])],
      companyName: ['', Validators.required],
      address: ['', Validators.required]
    })
  }

  getInvoices() {
    this.invoiceDataService.getInvoices().subscribe(data => {
      this.invoices = data;
    });
  }

  ngOnInit() {
    this.getInvoices();
  }

  addCustomer() {
    this.clientDataService.addClient(this.angForm.value).subscribe(data => {
      this.client = data;
    });
    this.router.navigate(['/clients']);
  }

}
