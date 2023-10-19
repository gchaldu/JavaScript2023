import { Component } from '@angular/core';
import { cliente } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.css']
})
export class NuevoClienteComponent {
  c:cliente = {
    apellido: "",
    nombre: "",
    dni: 0,
    fechaInicio: "",
    id: 0
  };
  constructor(){}

  guardarCliente(){
    console.log(this.c);
  }
}
