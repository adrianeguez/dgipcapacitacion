import { Component, OnInit } from '@angular/core';
import {ServiciosService} from "./servicios/servicios.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  nombreDuenoLocal:string='';

  constructor(private _serviciosService:ServiciosService){
  }
  ngOnInit(){
    this.nombreDuenoLocal = this._serviciosService.getNombreDueno();
  }
}
