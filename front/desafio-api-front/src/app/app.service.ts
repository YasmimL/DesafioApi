import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Client } from './clients';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  private readonly API = environment.API;
  // body: any;

  constructor(private http: HttpClient) { }

  getClients() {
    const url: string = `${this.API}api/clientes`;

    return this.http.get<Client>(url);
  }

  postClients(client) {
    const url: string = `${this.API}api/cliente`;
    console.log(client);

    return this.http.post(url, client);
  }

  deleteClient() {

  }

}
