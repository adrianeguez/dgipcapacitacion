import { Component, OnInit } from '@angular/core';
import { MyNewServiceService} from '../my-new-service.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  matriculas:any = [];

  constructor(private _MyNewServiceService:MyNewServiceService) { }

  ngOnInit() {

    this._MyNewServiceService
        .matricula()
        .getAll()
        .subscribe((res)=>{
          this.matriculas = res;
          console.log(this.matriculas);
        })
  }

}
