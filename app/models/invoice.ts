export class Invoice {
  id: number;
  invoiceNumber: number;
  invoiceDate: string;
  invoiceClientFullName: string;
  invoiceClientCompanyName?: string;
  invoiceClientNIP: number;
  invoiceClientAddress: string;
  invoiceClientZipCode: string;
  invoiceCompanyFullName: string;
  invoiceCompanyWebSite: string;
  invoiceCompanyAddress: string;
  invoiceCompanyZipCode: string;
  invoiceDescription: string;
  invoiceQuantity: number;
  invoiceCost: number;
  invoiceTotal: number;
  invoiceSubTotal: number;
  invoiceTax: number;
  invoiceGrandTotal: number;
}
