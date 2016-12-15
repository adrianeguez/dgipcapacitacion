import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {MasterURLService} from "./masterURL.service";

@Injectable()

export class FacultadApiService {
    // private _masterURLService:MasterURLService;
  masterUrl:string;
  modelo:string='/Facultad';
  constructor(private _masterURLService:MasterURLService,
              private _http:Http){
    this.masterUrl = _masterURLService.url+this.modelo;
      // this._masterURLService = _masterURLService;
    }
  // https://revisiondoctoral-adrianeguez.c9users.io/Facultad/1

  buscarTodos(){
    return this._http
      .get(this.masterUrl)
      .map((res: Response) => res.json());
  }
  buscarUno(idFacultad:string){
    return this._http
      .get(this.masterUrl+'/'+idFacultad)
      .map((res: Response) => res.json());
  }

  borrarUno(idFacultad:string){
    return this._http
      .delete(this.masterUrl+'/'+idFacultad)
      .map((res: Response) => res.json());
  }

}

