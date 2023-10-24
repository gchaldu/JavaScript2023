import { Component, OnInit} from '@angular/core';
import { Cliente } from 'src/app/interfaces/interface';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit{
  
  constructor(private clienteService:ClienteService){

  }

  listadoCliente:Cliente[] | undefined = [];

  ngOnInit(): void {
    this.mostrarClientes();
  }

  async mostrarClientes(){  
    this.listadoCliente = await this.clienteService.getClientes();
  }

  eliminarCliente(id:number){
    const ok = confirm("Desea eliminar el cliente con la id: ".concat(id.toString()));

    if(ok){
      this.clienteService.deleteCliente(id);
    }else{
      
    }
    
  }
}
