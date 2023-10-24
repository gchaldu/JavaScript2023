import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/interfaces/interface';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  c: Cliente | undefined;

  formularioVariable: FormGroup = this.fB.group({
    apellido: ["", [Validators.required, Validators.minLength(3)]],
    nombre: ["", [Validators.required]],
    dni: [0, [Validators.required]],
    fechaInicio: ["", [Validators.required]],
    id: 0
  })

  constructor(private fB: FormBuilder,
    private clienteService: ClienteService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.mostrarClienteForm();
  }

  async mostrarClienteForm() {
    this.route.params.subscribe(async param => {
      const id = +param["id"];

      this.c = await this.clienteService.getCliente(id);
      this.formularioVariable = this.fB.group({
        apellido: this.c?.apellido,
        nombre: this.c?.nombre,
        dni: this.c?.dni,
        fechaInicio: this.c?.fechaInicio,
        id: this.c?.id
      })
    })
  }

  editarCliente() {
    if (this.formularioVariable.invalid) {
      return
    }

    const c: Cliente = {
      apellido: this.formularioVariable.controls["apellido"].value,
      nombre: this.formularioVariable.controls["nombre"].value,
      dni: this.formularioVariable.controls["dni"].value,
      fechaInicio: this.formularioVariable.controls["fechaInicio"].value,
      id: this.formularioVariable.controls["id"].value
    }

    this.clienteService.putCliente(c);
  }

}
