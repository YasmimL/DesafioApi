import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';
import { Client } from './../clients';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clients: Client[] = [];
  // { id: 1, nome: 'Yasmim Nogueira', dataDeNascimento: "16/01/1998", email: "yasmimNogueira@gmail.com" },
  // { id: 2, nome: 'Robson Carvalho', dataDeNascimento: "03/04/1993", email: "robsonCarvalho@gmail.com" }

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getClient();
  }

  getClient() {
    this.appService.getClients().subscribe(data => {
      this.clients = data as any;
    });
  }

  onDeleteClient() {

  }

}
