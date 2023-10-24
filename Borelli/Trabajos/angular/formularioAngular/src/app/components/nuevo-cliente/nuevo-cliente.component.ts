import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/interfaces/interface';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.css']
})
export class NuevoClienteComponent {
  // c:cliente = {
  //   
  // };


  //constructor(){}

  // guardarCliente(){
  //   //console.log(this.c);
  // }
  //Creamso uan variable par el formulario y ahcemos referencia al objeto que acabamso de inyectar y utilizamos el group del form builder.
  formularioVariable:FormGroup = this.fB.group({
    apellido: ["",[Validators.required, Validators.minLength(3)]],
    nombre: ["",[Validators.required]],
    dni: [0,[Validators.required]],
    fechaInicio: ["",[Validators.required]],
    id: 0
  });

  //Le vamos a inyectar una dependencia al constructor, siemrpe que inyectamos algo lo ahcemos de manera private
  constructor(
              private fB:FormBuilder,
              private cService:ClienteService
              ){}
  
  guardarCliente(){
    if(this.formularioVariable.invalid){
      return
    }

    const c:Cliente = {
      apellido: this.formularioVariable.controls["apellido"].value,
      nombre: this.formularioVariable.controls["nombre"].value,
      dni: this.formularioVariable.controls["dni"].value,
      fechaInicio: this.formularioVariable.controls["fechaInicio"].value,
      id: this.formularioVariable.controls["id"].value
    } 
    
    this.cService.postCliente(c);
  }
  
}
