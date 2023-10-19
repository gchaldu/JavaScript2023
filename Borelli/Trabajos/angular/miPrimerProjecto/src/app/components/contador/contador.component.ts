import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  // title:string = "App Contador";
  // placeHolder = "Ingrese un texto...";
  // txtBtn = "Enviar";
  // valorEnviado:string = "";
  // Aca iria el constructor
  // soyUnaFuncion(){
  //   alert("Sos un boludo.");
  // }
  // podemos contador!:number, le avisamos a angular que este dato lo vamos a inicializar en la ejecucion del codigo, tambien podemos ? que va a recibir un dato, que espera un dato.
  txtBtn:string = "Incrementar"
  contador:number = 0;
  titulo:string = "App CONTADOR 2023"
  constructor(){

  }

  incrementar(){
    this.contador++;
  }

  desincrementar(){
    if(this.contador > 0){
      this.contador--;
    }
  }

  reset(){
    this.contador = 0;
  }
}
