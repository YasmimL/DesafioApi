import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';
import { Client } from './../clients';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  submitted: boolean = false;

  constructor(private appService: AppService) { }

  client: Client = {} as Client;

  ngOnInit(): void {
  }

  addClient() {
    this.appService.postClients(this.client).subscribe(
      success => console.log('sucesso'),
      error => console.error(error),
      () => console.log('request completo')

    );
  }

  onReset() {

  }

}
