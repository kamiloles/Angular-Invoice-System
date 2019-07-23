import {
  Component,
  OnInit,
  ViewChildren,
  ElementRef,
  ViewChild
} from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Invoice } from "../models/invoice";
import { InvoiceService } from "../services/invoices.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-create-invoice",
  templateUrl: "./create-invoice.component.html",
  styleUrls: ["./create-invoice.component.scss"]
})
export class CreateInvoiceComponent implements OnInit {
  invoiceForm: FormGroup;
  invoice: Invoice;

  public totalCalculated;
  public taxCalculated;
  public grandTotalCalculated;
  updateInvoiceDetailsSubscription;
  public myDateValue;

  constructor(
    private fb: FormBuilder,
    private invoiceService: InvoiceService,
    private router: Router
  ) {
    this.createForm();
  }


  ngOnInit() {
    this.initInvoiceDetails();
  }

  initInvoiceDetails() {
    this.invoice = {
      id: 0,
      invoiceNumber: 0,
      invoiceDate: this.myDateValue,
      invoiceClientFullName: "",
      invoiceClientCompanyName: "",
      invoiceClientNIP: 0,
      invoiceClientAddress: "",
      invoiceClientZipCode: "",
      invoiceCompanyFullName: "",
      invoiceCompanyAddress: "",
      invoiceCompanyWebSite: "",
      invoiceCompanyZipCode: "",
      invoiceDescription: "",
      invoiceQuantity: 0,
      invoiceCost: 0,
      invoiceTax: 0,
      invoiceTotal: 0,
      invoiceSubTotal: 0,
      invoiceGrandTotal: 0
    };
  }

  addValues(
    clientFullName: string,
    clientCompanyName: string,
    clientAddress: string,
    clientZipCode: string,
    companyFullName: string,
    companyWebsite: string,
    companyZipCode: string,
    quantityValue: number,
    costValue: number,
    taxValue: number
  ) {
    this.totalCalculated = quantityValue * costValue;
    this.taxCalculated = (quantityValue * costValue * taxValue) / 100;
    this.grandTotalCalculated = quantityValue * costValue + (quantityValue * costValue * taxValue) / 100;

    this.updateInvoiceDetails();
  }

  updateInvoiceDetails() {
    this.invoiceService.addInvoice(this.invoiceForm.value).subscribe(data => {
      this.invoice = data;
    });
    this.router.navigate(['/invoices']);
  }

  createForm() {
    this.invoiceForm = this.fb.group({
      invoiceDate: ["", Validators.required],
      invoiceNumber: ["", Validators.required],
      invoiceClientFullName: ["", Validators.required],
      invoiceClientCompanyName: ["", Validators.required],
      invoiceClientNIP: ['', Validators.compose([Validators.required, Validators.minLength(9), Validators.maxLength(9)])],
      invoiceClientAddress: ["", Validators.required],
      invoiceClientZipCode: ["", Validators.required],
      invoiceCompanyFullName: ["", Validators.required],
      invoiceCompanyWebsite: [],
      invoiceCompanyAddress: ["", Validators.required],
      invoiceCompanyZipCode: ["", Validators.required],
      invoiceDescription: ["", Validators.required],
      invoiceQuantity: ["", Validators.required],
      invoiceCost: ["", Validators.required],
      invoiceTax: ["", Validators.required]
    });
  }
}
