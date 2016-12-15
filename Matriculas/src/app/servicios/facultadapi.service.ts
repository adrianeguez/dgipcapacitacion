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
  buscarTodos(){
    return this._http
      .get(this.masterUrl)
      .map((res: Response) => res.json());
  }

}

