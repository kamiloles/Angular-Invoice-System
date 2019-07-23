import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Client } from '../models/client';
import { Invoice } from '../models/invoice';

@Injectable({
  providedIn: 'root'
})
export class ClientData implements InMemoryDbService {

  createDb(){
    const clients: Client[] = [
      {
        id: 1,
        email: "Maverick@jamir.name",
        fullName: "Kennith Nitzsche",
        nip: 153348839,
        companyName: "Bliabon",
        address: '1753 Holly Street Vienna',
        country: "Antarctica",
        invoices: [
          {
            invoiceNumber: 2,
            invoiceDate: '12/06/2012',
            invoiceClientFullName: 'Apex',
            invoiceClientCompanyName: 'New Client Company Name',
            invoiceClientNIP: 153348839,
            invoiceClientAddress: 'Cuppertino 23',
            invoiceClientZipCode: '12/234',
            invoiceCompanyFullName: 'New Company Full Name',
            invoiceCompanyWebSite: 'New Company Web site',
            invoiceCompanyAddress: 'Poland, Katowice, Jarzębinna 23',
            invoiceCompanyZipCode: '12-323',
            invoiceDescription: 'New invoice description',
            invoiceQuantity: 3,
            invoiceCost: 123,
            invoiceTotal: 1234,
            invoiceSubTotal: 542,
            invoiceTax: 23,
            invoiceGrandTotal: 13123
          }
        ]
      },
      {
        id: 2,
        email: "Kenna@raquel.org",
        fullName: "Zack McLaughlin",
        nip: 158856800,
        companyName: 'Cymbedak',
        address: '1610 Nancy Street Norfolk',
        country: "Micronesia",
        invoices: [
          {
            invoiceNumber: 3,
            invoiceDate: '12/06/2012',
            invoiceClientFullName: 'Farbex',
            invoiceClientCompanyName: 'New Client Company Name',
            invoiceClientNIP: 153348839,
            invoiceClientAddress: 'Cuppertino 23',
            invoiceClientZipCode: '12/234',
            invoiceCompanyFullName: 'New Company Full Name',
            invoiceCompanyWebSite: 'New Company Web site',
            invoiceCompanyAddress: 'Poland, Katowice, Jarzębinna 23',
            invoiceCompanyZipCode: '12-323',
            invoiceDescription: 'New invoice description',
            invoiceQuantity: 3,
            invoiceCost: 123,
            invoiceTotal: 1234,
            invoiceSubTotal: 542,
            invoiceTax: 23,
            invoiceGrandTotal: 13123
          }
        ]
      },
      {
        id: 3,
        email: "Ned.Hickle@vivien.io",
        fullName: "Otha Conroy",
        nip: 420422082,
        companyName: 'Most',
        address: '1119 Lakewood Drive, Allentown',
        country: "Bulgaria",
        invoices: [
          {
            invoiceNumber: 2,
            invoiceDate: '12/06/2012',
            invoiceClientFullName: 'Apex',
            invoiceClientCompanyName: 'New Client Company Name',
            invoiceClientNIP: 153348839,
            invoiceClientAddress: 'Cuppertino 23',
            invoiceClientZipCode: '12/234',
            invoiceCompanyFullName: 'New Company Full Name',
            invoiceCompanyWebSite: 'New Company Web site',
            invoiceCompanyAddress: 'Poland, Katowice, Jarzębinna 23',
            invoiceCompanyZipCode: '12-323',
            invoiceDescription: 'New invoice description',
            invoiceQuantity: 3,
            invoiceCost: 123,
            invoiceTotal: 1234,
            invoiceSubTotal: 542,
            invoiceTax: 23,
            invoiceGrandTotal: 13123
          }
        ]
      },
      {
        id: 4,
        email: "Rebeca_Barton@mikayla.us",
        fullName: "Dr. Dana Pouros",
        nip: 481804591,
        companyName: 'Evraingroen',
        address: '805 Roane Avenue, Cambridge',
        country: "French Southern Territories",
        invoices: [
          {
            invoiceNumber: 2,
            invoiceDate: '12/06/2012',
            invoiceClientFullName: 'Apex',
            invoiceClientCompanyName: 'New Client Company Name',
            invoiceClientNIP: 153348839,
            invoiceClientAddress: 'Cuppertino 23',
            invoiceClientZipCode: '12/234',
            invoiceCompanyFullName: 'New Company Full Name',
            invoiceCompanyWebSite: 'New Company Web site',
            invoiceCompanyAddress: 'Poland, Katowice, Jarzębinna 23',
            invoiceCompanyZipCode: '12-323',
            invoiceDescription: 'New invoice description',
            invoiceQuantity: 3,
            invoiceCost: 123,
            invoiceTotal: 1234,
            invoiceSubTotal: 542,
            invoiceTax: 23,
            invoiceGrandTotal: 13123
          }
        ]
      },
      {
        id: 5,
        email: "Jolie_Leannon@rosalind.biz",
        fullName: "Ursula Wehner",
        nip: 9482371285,
        companyName: 'Apex',
        address: '496 Duffy Street, Gary',
        country: "Åland Islands",
        invoices: [
          {
            invoiceNumber: 2,
            invoiceDate: '12/06/2012',
            invoiceClientFullName: 'Apex',
            invoiceClientCompanyName: 'New Client Company Name',
            invoiceClientNIP: 153348839,
            invoiceClientAddress: 'Cuppertino 23',
            invoiceClientZipCode: '12/234',
            invoiceCompanyFullName: 'New Company Full Name',
            invoiceCompanyWebSite: 'New Company Web site',
            invoiceCompanyAddress: 'Poland, Katowice, Jarzębinna 23',
            invoiceCompanyZipCode: '12-323',
            invoiceDescription: 'New invoice description',
            invoiceQuantity: 3,
            invoiceCost: 123,
            invoiceTotal: 1234,
            invoiceSubTotal: 542,
            invoiceTax: 23,
            invoiceGrandTotal: 13123
          }
        ]
      },
      {
        id: 88,
        email: "Makenna_Blanda@juliana.co.uk",
        fullName: "Vilma Schinner",
        nip: 975211786,
        companyName: 'Huahem',
        address: '4509 Passaic Street, Washington',
        country: "Mongolia",
        invoices: [
          {
            invoiceNumber: 2,
            invoiceDate: '12/06/2012',
            invoiceClientFullName: 'Apex',
            invoiceClientCompanyName: 'New Client Company Name',
            invoiceClientNIP: 153348839,
            invoiceClientAddress: 'Cuppertino 23',
            invoiceClientZipCode: '12/234',
            invoiceCompanyFullName: 'New Company Full Name',
            invoiceCompanyWebSite: 'New Company Web site',
            invoiceCompanyAddress: 'Poland, Katowice, Jarzębinna 23',
            invoiceCompanyZipCode: '12-323',
            invoiceDescription: 'New invoice description',
            invoiceQuantity: 3,
            invoiceCost: 123,
            invoiceTotal: 1234,
            invoiceSubTotal: 542,
            invoiceTax: 23,
            invoiceGrandTotal: 13123
          }
        ]
      },
      {
        id: 6,
        email: "Jolie_Leannon@rosalind.biz",
        fullName: "Ursula Wehner",
        nip: 571448667,
        companyName: 'Esclarent',
        address: '604 Bird Street, Farmington',
        country: "Åland Islands",
        invoices: [
          {
            invoiceNumber: 2,
            invoiceDate: '12/06/2012',
            invoiceClientFullName: 'Apex',
            invoiceClientCompanyName: 'New Client Company Name',
            invoiceClientNIP: 153348839,
            invoiceClientAddress: 'Cuppertino 23',
            invoiceClientZipCode: '12/234',
            invoiceCompanyFullName: 'New Company Full Name',
            invoiceCompanyWebSite: 'New Company Web site',
            invoiceCompanyAddress: 'Poland, Katowice, Jarzębinna 23',
            invoiceCompanyZipCode: '12-323',
            invoiceDescription: 'New invoice description',
            invoiceQuantity: 3,
            invoiceCost: 123,
            invoiceTotal: 1234,
            invoiceSubTotal: 542,
            invoiceTax: 23,
            invoiceGrandTotal: 13123
          }
        ]
      },
      {
        id: 7,
        email: "Leola.Bechtelar@roel.co.uk",
        fullName: "Dr. Audie Emmerich",
        nip: 662709520,
        companyName: 'Parzihoot',
        address: '4187 White Avenue, Alice',
        country: "Afghanistan",
        invoices: [
          {
            invoiceNumber: 2,
            invoiceDate: '12/06/2012',
            invoiceClientFullName: 'Farbex',
            invoiceClientCompanyName: 'New Client Company Name',
            invoiceClientNIP: 153348839,
            invoiceClientAddress: 'Cuppertino 23',
            invoiceClientZipCode: '12/234',
            invoiceCompanyFullName: 'New Company Full Name',
            invoiceCompanyWebSite: 'New Company Web site',
            invoiceCompanyAddress: 'Poland, Katowice, Jarzębinna 23',
            invoiceCompanyZipCode: '12-323',
            invoiceDescription: 'New invoice description',
            invoiceQuantity: 3,
            invoiceCost: 123,
            invoiceTotal: 1234,
            invoiceSubTotal: 542,
            invoiceTax: 23,
            invoiceGrandTotal: 13123
          }
        ]
      },
      {
        id: 104,
        email: "Abagail@loraine.biz",
        fullName: "Kane Collier",
        nip: 277082952,
        companyName: 'Tervudd',
        address: '1290 Honeysuckle Lane, Mc Cleary',
        country: "Algeria",
        invoices: [
          {
            invoiceNumber: 2,
            invoiceDate: '12/06/2012',
            invoiceClientFullName: 'Farbex',
            invoiceClientCompanyName: 'New Client Company Name',
            invoiceClientNIP: 153348839,
            invoiceClientAddress: 'Cuppertino 23',
            invoiceClientZipCode: '12/234',
            invoiceCompanyFullName: 'New Company Full Name',
            invoiceCompanyWebSite: 'New Company Web site',
            invoiceCompanyAddress: 'Poland, Katowice, Jarzębinna 23',
            invoiceCompanyZipCode: '12-323',
            invoiceDescription: 'New invoice description',
            invoiceQuantity: 3,
            invoiceCost: 123,
            invoiceTotal: 1234,
            invoiceSubTotal: 542,
            invoiceTax: 23,
            invoiceGrandTotal: 13123
          }
        ]
      },
      {
        id: 8,
        email: "Mariana@quinten.us",
        fullName: "Jeffry Renner",
        nip: 902981362,
        companyName: 'Peribal',
        address: '802 Trouser Leg Road, Springfield',
        country: "Guam",
        invoices: [
          {
            invoiceNumber: 2,
            invoiceDate: '12/06/2012',
            invoiceClientFullName: 'Farbex',
            invoiceClientCompanyName: 'New Client Company Name',
            invoiceClientNIP: 153348839,
            invoiceClientAddress: 'Cuppertino 23',
            invoiceClientZipCode: '12/234',
            invoiceCompanyFullName: 'New Company Full Name',
            invoiceCompanyWebSite: 'New Company Web site',
            invoiceCompanyAddress: 'Poland, Katowice, Jarzębinna 23',
            invoiceCompanyZipCode: '12-323',
            invoiceDescription: 'New invoice description',
            invoiceQuantity: 3,
            invoiceCost: 123,
            invoiceTotal: 1234,
            invoiceSubTotal: 542,
            invoiceTax: 23,
            invoiceGrandTotal: 13123
          }
        ]
      },
      {
        id: 9,
        email: "Kane@hiram.org",
        fullName: "Sofia Becker",
        nip: 218189866,
        companyName: 'Trevriddle',
        address: '1845 Grant Street, Naples',
        country: "Venezuela"
      },
      {
        id: 10,
        email: "Agustina@ahmed.ca",
        fullName: "Mayra Walter",
        nip: 715351042,
        companyName: 'Parzirion',
        address: '263 Lincoln Drive, Harrisburg',
        country: "Netherlands Antilles"
      },
      {
        id: 11,
        email: "Tevin_Ebert@emmy.io",
        fullName: "Santos Gutkowski",
        nip: 815011077,
        companyName: 'Passewain',
        address: '1292 Rainy Day Drive, Newton',
        country: "Antigua and Barbuda"
      },
      {
        id: 12,
        email: "Bell@coralie.ca",
        fullName: "Rhiannon Turcotte",
        nip: 365156658,
        companyName: 'Karlois',
        address: '4007 Carson Street, San Diego',
        country: "Gibraltar"
      },
      {
        id: 13,
        email: "Kiera.Reynolds@luz.io",
        fullName: "Dr. Lukas Abshire",
        nip: 798957949,
        companyName: 'Antorence',
        address: '1922 Lunetta Street, Minsk',
        country: "Belarus"
      },
      {
        id: 14,
        email: "Abagail@loraine.biz",
        fullName: "Kane Collier",
        nip: 277082952,
        companyName: 'Tervudd',
        address: '1290 Honeysuckle Lane, Mc Cleary',
        country: "Algeria"
      }

    ];

    const invoices: Invoice[] = [
      {
        id: 1,
        invoiceNumber: 1,
        invoiceDate: '12/03/2019',
        invoiceClientFullName: 'APEX Sp. z o.o.',
        invoiceClientCompanyName: 'New Client Company Name',
        invoiceClientNIP: 153348839,
        invoiceClientAddress: 'Cuppertino 23',
        invoiceClientZipCode: '12/234',
        invoiceCompanyFullName: 'New Company Full Name',
        invoiceCompanyWebSite: 'New Company Web site',
        invoiceCompanyAddress: 'Poland, Katowice, Jarzębinna 23',
        invoiceCompanyZipCode: '12-323',
        invoiceDescription: 'New invoice description',
        invoiceQuantity: 3,
        invoiceCost: 123,
        invoiceTotal: 1234,
        invoiceSubTotal: 542,
        invoiceTax: 23,
        invoiceGrandTotal: 13123
      },
      {
        id: 2,
        invoiceNumber: 2,
        invoiceDate: '12/06/2012',
        invoiceClientFullName: 'Farbex',
        invoiceClientCompanyName: 'New Client Company Name',
        invoiceClientNIP: 153348839,
        invoiceClientAddress: 'Cuppertino 23',
        invoiceClientZipCode: '12/234',
        invoiceCompanyFullName: 'New Company Full Name',
        invoiceCompanyWebSite: 'New Company Web site',
        invoiceCompanyAddress: 'Poland, Katowice, Jarzębinna 23',
        invoiceCompanyZipCode: '12-323',
        invoiceDescription: 'New invoice description',
        invoiceQuantity: 3,
        invoiceCost: 123,
        invoiceTotal: 1234,
        invoiceSubTotal: 542,
        invoiceTax: 23,
        invoiceGrandTotal: 13123
      },
      {
        id: 3,
        invoiceNumber: 3,
        invoiceDate: '12/03/2019',
        invoiceClientFullName: 'APEX Sp. z o.o.',
        invoiceClientCompanyName: 'New Client Company Name',
        invoiceClientNIP: 153348839,
        invoiceClientAddress: 'Cuppertino 23',
        invoiceClientZipCode: '12/234',
        invoiceCompanyFullName: 'New Company Full Name',
        invoiceCompanyWebSite: 'New Company Web site',
        invoiceCompanyAddress: 'Poland, Katowice, Jarzębinna 23',
        invoiceCompanyZipCode: '12-323',
        invoiceDescription: 'New invoice description',
        invoiceQuantity: 3,
        invoiceCost: 123,
        invoiceTotal: 1234,
        invoiceSubTotal: 542,
        invoiceTax: 23,
        invoiceGrandTotal: 13123
      },
      {
        id: 4,
        invoiceNumber: 4,
        invoiceDate: '12/03/2019',
        invoiceClientFullName: 'APEX Sp. z o.o.',
        invoiceClientCompanyName: 'New Client Company Name',
        invoiceClientNIP: 153348839,
        invoiceClientAddress: 'Cuppertino 23',
        invoiceClientZipCode: '12/234',
        invoiceCompanyFullName: 'New Company Full Name',
        invoiceCompanyWebSite: 'New Company Web site',
        invoiceCompanyAddress: 'Poland, Katowice, Jarzębinna 23',
        invoiceCompanyZipCode: '12-323',
        invoiceDescription: 'New invoice description',
        invoiceQuantity: 3,
        invoiceCost: 123,
        invoiceTotal: 1234,
        invoiceSubTotal: 542,
        invoiceTax: 23,
        invoiceGrandTotal: 13123
      }
    ];
    return { clients, invoices };
  }
}

