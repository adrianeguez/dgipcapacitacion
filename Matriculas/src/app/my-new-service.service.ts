import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()


export class MyNewServiceService {

  masterUrl:String='https://revisiondoctoral-adrianeguez.c9users.io/';

  constructor(private _http: Http) {


   }

matricula(){

  let urlLocal = 'Matricula';

  return {
      getAll: ()=>{
        return this._http
          .get(this.masterUrl + urlLocal)
          .map((res: Response) => res.json());
      }
    }



}

}
