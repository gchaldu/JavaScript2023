import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/interface';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  
  form:FormGroup = this.fB.group({
    userName:["",[Validators.required, Validators.minLength(3)]],
    pw:["", [Validators.required, Validators.minLength(3)]]
  });

  users: Usuario[] | undefined = []

  constructor(
                private fB: FormBuilder,
                private userService: UsuariosService
                ){
  }

  ngOnInit(): void {
    this.mostrarUsuarios();
  }

  registrarUsuario(){
    if(this.form.invalid){
      return
    }

    const u:Usuario = {
      userName: this.form.controls["userName"].value,
      password: this.form.controls["pw"].value
    }

    this.userService.postUsuario(u);
  }

  async mostrarUsuarios(){
    this.users = await this.userService.getUsuarios();
    console.log(this.users);
  }
}
