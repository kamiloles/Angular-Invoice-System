import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../services/clients.service';
import { ClientData } from '../services/client-data.service';
import { Client } from '../models/client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clients: ClientData[] = [];
  client: Client;

  isClientsDataLoading: boolean;

  constructor(private clientDataService: ClientsService) {}

  getClients() {
    this.isClientsDataLoading = true;
    this.clientDataService.getClients().subscribe(data => {
      this.clients = data;
      this.isClientsDataLoading = false;
    })
  }

  deleteClient(id: number) {
    this.clientDataService.deleteClient(id).subscribe(data => {
      this.getClients();
    })
  }

  public idToUpdate = 1;

  updateClient() {
    this.clientDataService.getClient(this.idToUpdate).subscribe(data => {
      this.client = data;
      this.client.fullName = 'Updated full name';
      this.clientDataService.updateClient(this.client).subscribe(data1 => {
        this.getClients();
      })
    })
  }

  ngOnInit() {
    this.getClients();
  }

}
