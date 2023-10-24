import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  urlClientes:string = "http://localhost:4000/clientes";

  constructor(private router: Router) { }

  async getClientes(): Promise<Cliente[] | undefined>{
    try{
      const resultado = await fetch(this.urlClientes, {method:"GET"});
      const datos = await resultado.json();
      return datos;
    }catch(err){
      console.log(err);
    }

    return undefined;
  }

  async postCliente(c:Cliente){
    try{
      await fetch(this.urlClientes, 
        {
          method: "POST",
          body: JSON.stringify(c),
          headers: {
            "Content-type": "application/json"
          }
        });

        this.router.navigate(["home"]);
    }catch(err){

    }
  }

  async deleteCliente(id:number){
    try{
      await fetch(this.urlClientes.concat(`/${id}`),
        {
          method:"DELETE"
        })
        
      window.location.href="index.html";
    }catch(err){  
      console.log(err);
    }
  }

  async getCliente(id:number): Promise<Cliente | undefined>{
    try{
      const resultado = await fetch(this.urlClientes.concat(`/${id}`), 
      {
        method:"GET"
      });
      const datos = await resultado.json();
      return datos;
    }catch(err){
      console.log(err);
    }

    return undefined;
  }

  async putCliente(cliente:Cliente){
    try{
      await fetch(this.urlClientes.concat(`/${cliente.id}`),
        {
          method:"PUT",
          body: JSON.stringify(cliente),
          headers:{
            "Content-type":"application/json"
          }
          
        });

        this.router.navigate(["home"]);

    }catch(error){
      console.log(error);
    }
  }
}
