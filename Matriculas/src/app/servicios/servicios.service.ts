import { Injectable, EventEmitter } from '@angular/core';

@Injectable()

export class ServiciosService {
  eventoAEmitir = new EventEmitter();
  eventoAEmitir2 = new EventEmitter();



  nombre:string='';
  private nombreDueno:string='Adrian';
  constructor(){

    this.eventoAEmitir = new EventEmitter();

  }
  getNombreDueno():string{
    return this.nombreDueno;
  }
  setNombreDueno(nuevoNombre:string):void{
    console.log('Se cambio al nombre:', nuevoNombre);
    this.nombreDueno = nuevoNombre;
    this.eventoAEmitir.emit(nuevoNombre);
    console.log('El valor actual:', this.nombreDueno);
  }

}


//
//
// // import { Injectable, EventEmitter } from '@angular/core';
// // import {Http, Response, Headers, RequestOptions} from '@angular/http';
// // import {Observable} from 'rxjs/Rx';
// // import 'rxjs/add/operator/map';
//
//
// export class ApiService {
//
//   datos = new EventEmitter  ();
//   masterURL = 'https://revisiondoctoral-adrianeguez.c9users.io';
//   private _saludo:string = 'Hola';
//
//   constructor(private _http: Http
//   ) {
//     this.datos = new EventEmitter();
//   }
//
//   saludar(nuevoSaludo:string):string{
//     return this._saludo + nuevoSaludo;
//   }
//
//   get saludo():string {
//     return this._saludo;
//   }
//   set saludo(nuevoSaludo:string) {
//     this.datos.emit(nuevoSaludo);
//     this._saludo = nuevoSaludo;
//   }
//
//
//   guardarSaludo(nuevoSaludo:string){
//     this._saludo = nuevoSaludo;
//     this.datos.emit(nuevoSaludo);
//   }
//
//   recibirSaludo():string{
//     return this._saludo
//   }
//
//   matricula(){
//     let urlModelo = '/Matricula'
//     return {
//       getAll: ()=> {
//         return this._http
//           .get(this.masterURL + urlModelo)
//           .map((res: Response) => res.json());
//       }
//     }
//   }
//
//
//
//
//
//
// }
