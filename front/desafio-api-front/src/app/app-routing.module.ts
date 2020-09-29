import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientDeleteComponent } from './client-delete/client-delete.component';

import { ClientSearchComponent } from './client-search/client-search.component';
import { ClientUpdateComponent } from './client-update/client-update.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'buscar', component: ClientSearchComponent },
    { path: 'cadastrar', component: ClientCreateComponent },
    { path: 'atualizar', component: ClientUpdateComponent },
    { path: 'deletar', component: ClientDeleteComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }