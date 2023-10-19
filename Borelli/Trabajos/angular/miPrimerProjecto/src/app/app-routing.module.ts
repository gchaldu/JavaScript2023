import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ContadorComponent } from './components/contador/contador.component';

const routes: Routes = [
  {
    path: "contador",
    component: ContadorComponent
  },
  {
    path: "cliente",
    component: ClienteComponent
  },
  {
    path: "**",
    redirectTo: "contador"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
