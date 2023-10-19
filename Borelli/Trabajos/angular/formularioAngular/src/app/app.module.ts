import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListarClienteComponent } from './components/listar-cliente/listar-cliente.component';
import { NuevoClienteComponent } from './components/nuevo-cliente/nuevo-cliente.component';
import { ListarClientePageComponent } from './pages/listar-cliente-page/listar-cliente-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NuevoClientePageComponent } from './pages/nuevo-cliente-page/nuevo-cliente-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarClienteComponent,
    NuevoClienteComponent,
    ListarClientePageComponent,
    NavbarComponent,
    NuevoClientePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
