import { Component, OnInit } from '@angular/core';
import {ServiciosService} from "../servicios/servicios.service";


@Component({
  selector:'ani-perros', //<ani-gatos></ani-gatos>
  templateUrl: './perros.component.html' // Esta localizado el HTML
})

export class PerroComponent implements OnInit{
  nombreDuenoLocal:string='';

  constructor(private _serviciosService:ServiciosService){
  }
  ngOnInit(){
    this.nombreDuenoLocal = this._serviciosService.getNombreDueno();
  }
}

