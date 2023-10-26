import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usersUrl:string = "http://localhost:4000/usuarios";

  constructor(private router: Router) { }

  async postUsuario( u:Usuario ){
    try{
      await fetch(this.usersUrl,{
        method:"POST",
        body: JSON.stringify(u),
        headers:{
          "Content-type":"application/json"
        }
      });

      this.router.navigate(["home"]);

    }catch(err){
      console.log(err);
    }
  }

  async getUsuarios(): Promise<Usuario[] | undefined>{
    try{
      const resultado = await fetch(this.usersUrl, {
        method:"GET"
      })
      const datos = await resultado.json();
      return datos;

    }catch(err){
      console.log(err);
    }

    return undefined;
  }

  async deleteUsuario(id:number){
    try{
      
    }catch(err){
      console.log(err);
    }
  }
  
}
