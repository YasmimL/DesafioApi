import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ClientSearchComponent } from './client-search/client-search.component';
import { AppRoutingModule } from './app-routing.module';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientUpdateComponent } from './client-update/client-update.component';
import { ClientDeleteComponent } from './client-delete/client-delete.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ClientSearchComponent,
    ClientCreateComponent,
    ClientUpdateComponent,
    ClientDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
