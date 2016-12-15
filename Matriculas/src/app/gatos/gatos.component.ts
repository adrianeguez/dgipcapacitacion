import { Component, OnInit } from '@angular/core';
import {ServiciosService} from "../servicios/servicios.service";

@Component({
  selector:'ani-gatos', //<ani-gatos></ani-gatos>
  templateUrl: './gatos.component.html' // Esta localizado el HTML
})

export class GatoComponent implements OnInit{
  nombreDuenoLocal:string='';

  constructor(private _serviciosService:ServiciosService){
  }
  ngOnInit(){
    this.nombreDuenoLocal = this._serviciosService.getNombreDueno();
  }

  cambiarNombreAMashi(){
    this._serviciosService.setNombreDueno('Senor Gato');
    this.nombreDuenoLocal = this._serviciosService.getNombreDueno();
  }


}

