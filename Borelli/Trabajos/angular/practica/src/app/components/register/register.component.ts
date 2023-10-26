import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/interface';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  form:FormGroup = this.fB.group({
    userName:["",[Validators.required, Validators.minLength(3)]],
    pw:["", [Validators.required, Validators.minLength(3)]]
  });

  constructor(
                private fB: FormBuilder,
                private userService: UsuariosService
                ){
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
}
