import { Component, OnInit } from '@angular/core';
import {ServiciosService} from "./servicios/servicios.service";
import {FacultadApiService} from "./servicios/facultadapi.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  nombreDuenoLocal:string='';
  facultades:any=[];
  constructor(private _serviciosService:ServiciosService,
              private _facultadApiService:FacultadApiService){
  }
  ngOnInit(){
    this._facultadApiService
        .buscarTodos()
        .subscribe(facultades=>{
          this.facultades = facultades;
          console.log(this.facultades);
        });
    this.nombreDuenoLocal = this._serviciosService.getNombreDueno();
    // Escuchar el evento del servico _serviciosService
    // El evento se llama 'eventoAEmitir'
    this._serviciosService
        .eventoAEmitir
        .subscribe(res =>{
          this.nombreDuenoLocal = res;
          console.log(this.nombreDuenoLocal);
        })
  }

  buscarFacultadID(idFacultad:string){
    this._facultadApiService
        .buscarUno(idFacultad)
        .subscribe(facultad=>{
          console.log(facultad);
        });
  }

  borrarFacultadID(idFacultad:string){
    this._facultadApiService
      .borrarUno(idFacultad)
      .subscribe(
        successData=>{
          console.log('Llego la respuesta del servidor',successData);
        for(let i=0;i<this.facultades.length;i++){
          if(this.facultades[i].id==idFacultad){
            this.facultades.splice(i,1);
          }
        }
      },
        errorData=>{
        console.log('Hubo el error',errorData)
        });
  }

}
