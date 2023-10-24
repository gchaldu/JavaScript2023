import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarClientePageComponent } from './pages/listar-cliente-page/listar-cliente-page.component';
import { NuevoClientePageComponent } from './pages/nuevo-cliente-page/nuevo-cliente-page.component';
import { EditarClientePageComponent } from './pages/editar-cliente-page/editar-cliente-page.component';

const routes: Routes = [
  {
    path:"home", 
    component:ListarClientePageComponent
  },
  {
    path:"nuevo-cliente",
    component:NuevoClientePageComponent
  },
  {
    path:"editar-cliente/:id",
    component:EditarClientePageComponent
  },
  {
    path:"**",
    redirectTo:"home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
