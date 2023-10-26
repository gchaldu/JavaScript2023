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
}
