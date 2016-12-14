import { Component, OnInit } from '@angular/core';
import {ServiciosService} from "../servicios/servicios.service";

@Component({
  selector:'ani-tortugas', //<ani-tortugas></ani-tortugas>
  templateUrl: './tortugas.component.html' // Esta localizado el HTML
})

export class TortugaComponent implements OnInit{
  nombreDuenoLocal:string='';

  constructor(private _serviciosService:ServiciosService){
  }
  ngOnInit(){
    this.nombreDuenoLocal = this._serviciosService.getNombreDueno();
  }

  cambiarNombreAMashi(){
    this._serviciosService.setNombreDueno('MASHI');
    // this.nombreDuenoLocal = this._serviciosService.getNombreDueno();
  }


}

