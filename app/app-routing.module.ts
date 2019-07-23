import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './hero/index/index.component';
import { ClientsComponent } from './clients/clients.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';


const routes: Routes = [
  {path: '',  component: IndexComponent, },
  {path: '', component: HomeComponent, },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'invoices', component: InvoicesComponent,  },
  {path: 'clients', component: ClientsComponent},
  {path: 'create-client', component: CreateClientComponent},
  {path: 'create-invoice', component: CreateInvoiceComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
