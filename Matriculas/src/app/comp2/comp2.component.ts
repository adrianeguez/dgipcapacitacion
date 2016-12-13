import { Component, OnInit } from '@angular/core';
import { MyNewServiceService} from '../my-new-service.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  matriculas:any = [
  {
    "PropuestaDoctorales": [
      {
        "idMatricula": 1,
        "nombre": "Propuesta Redes",
        "lineaInvestigacion": "",
        "posibleTutor": "",
        "anoEmpezoFormacion": "",
        "anoEmpezoInvestigacion": "",
        "justificacionDescripcion": "",
        "alcanceProblema": "",
        "estadoArteBibliografia": "",
        "objetivoGeneral": "",
        "objetivoEspecifico": "",
        "propuestaMetodologica": "",
        "urlCronograma": "",
        "estado": "SinRevisor",
        "createdAt": "2016-12-13T14:39:52.189Z",
        "updatedAt": "2016-12-13T14:39:52.189Z",
        "id": 1
      }
    ],
    "idUsuario": {
      "nombre": "Pepe Perez",
      "cedula": "1718123942",
      "correo": "eadepto@hotmail.com",
      "activo": "Activo",
      "createdAt": "2016-12-13T14:39:52.081Z",
      "updatedAt": "2016-12-13T14:39:52.081Z",
      "id": 1
    },
    "idPeriodoProgDoct": {
      "nombre": "2016-A",
      "idProgramaDoctoral": 1,
      "activo": "Inactivo",
      "createdAt": "2016-12-13T14:39:51.366Z",
      "updatedAt": "2016-12-13T14:39:51.366Z",
      "id": 1
    },
    "estado": "PreMatriculado",
    "createdAt": "2016-12-13T14:39:52.164Z",
    "updatedAt": "2016-12-13T14:39:52.164Z",
    "id": 1
  },
  {
    "PropuestaDoctorales": [
      {
        "idMatricula": 2,
        "nombre": "Propuesta Inteligencia Artificial",
        "lineaInvestigacion": "",
        "posibleTutor": "",
        "anoEmpezoFormacion": "",
        "anoEmpezoInvestigacion": "",
        "justificacionDescripcion": "",
        "alcanceProblema": "",
        "estadoArteBibliografia": "",
        "objetivoGeneral": "",
        "objetivoEspecifico": "",
        "propuestaMetodologica": "",
        "urlCronograma": "",
        "estado": "SinRevisor",
        "createdAt": "2016-12-13T14:39:52.192Z",
        "updatedAt": "2016-12-13T14:39:52.192Z",
        "id": 2
      }
    ],
    "idUsuario": {
      "nombre": "Pepe Perez",
      "cedula": "1718123942",
      "correo": "eadepto@hotmail.com",
      "activo": "Activo",
      "createdAt": "2016-12-13T14:39:52.081Z",
      "updatedAt": "2016-12-13T14:39:52.081Z",
      "id": 1
    },
    "idPeriodoProgDoct": {
      "nombre": "2016-B",
      "idProgramaDoctoral": 1,
      "activo": "Inactivo",
      "createdAt": "2016-12-13T14:39:51.368Z",
      "updatedAt": "2016-12-13T14:39:51.368Z",
      "id": 2
    },
    "estado": "PreMatriculado",
    "createdAt": "2016-12-13T14:39:52.167Z",
    "updatedAt": "2016-12-13T14:39:52.167Z",
    "id": 2
  },
  {
    "PropuestaDoctorales": [
      {
        "idMatricula": 3,
        "nombre": "Propuesta Arquitectura",
        "lineaInvestigacion": "",
        "posibleTutor": "",
        "anoEmpezoFormacion": "",
        "anoEmpezoInvestigacion": "",
        "justificacionDescripcion": "",
        "alcanceProblema": "",
        "estadoArteBibliografia": "",
        "objetivoGeneral": "",
        "objetivoEspecifico": "",
        "propuestaMetodologica": "",
        "urlCronograma": "",
        "estado": "SinRevisor",
        "createdAt": "2016-12-13T14:39:52.194Z",
        "updatedAt": "2016-12-13T14:39:52.194Z",
        "id": 3
      }
    ],
    "idUsuario": {
      "nombre": "Maria Flores",
      "cedula": "0115397430",
      "correo": "vadrian.eguez@gmail.com",
      "activo": "Activo",
      "createdAt": "2016-12-13T14:39:52.091Z",
      "updatedAt": "2016-12-13T14:39:52.091Z",
      "id": 2
    },
    "idPeriodoProgDoct": {
      "nombre": "2016-A",
      "idProgramaDoctoral": 1,
      "activo": "Inactivo",
      "createdAt": "2016-12-13T14:39:51.366Z",
      "updatedAt": "2016-12-13T14:39:51.366Z",
      "id": 1
    },
    "estado": "PreMatriculado",
    "createdAt": "2016-12-13T14:39:52.170Z",
    "updatedAt": "2016-12-13T14:39:52.170Z",
    "id": 3
  },
  {
    "PropuestaDoctorales": [
      {
        "idMatricula": 4,
        "nombre": "Propuesta Arquitectura",
        "lineaInvestigacion": "",
        "posibleTutor": "",
        "anoEmpezoFormacion": "",
        "anoEmpezoInvestigacion": "",
        "justificacionDescripcion": "",
        "alcanceProblema": "",
        "estadoArteBibliografia": "",
        "objetivoGeneral": "",
        "objetivoEspecifico": "",
        "propuestaMetodologica": "",
        "urlCronograma": "",
        "estado": "SinRevisor",
        "createdAt": "2016-12-13T14:39:52.197Z",
        "updatedAt": "2016-12-13T14:39:52.197Z",
        "id": 4
      }
    ],
    "idUsuario": {
      "nombre": "Maria Flores",
      "cedula": "0115397430",
      "correo": "vadrian.eguez@gmail.com",
      "activo": "Activo",
      "createdAt": "2016-12-13T14:39:52.091Z",
      "updatedAt": "2016-12-13T14:39:52.091Z",
      "id": 2
    },
    "idPeriodoProgDoct": {
      "nombre": "2016-B",
      "idProgramaDoctoral": 1,
      "activo": "Inactivo",
      "createdAt": "2016-12-13T14:39:51.368Z",
      "updatedAt": "2016-12-13T14:39:51.368Z",
      "id": 2
    },
    "estado": "PreMatriculado",
    "createdAt": "2016-12-13T14:39:52.172Z",
    "updatedAt": "2016-12-13T14:39:52.172Z",
    "id": 4
  },
  {
    "PropuestaDoctorales": [
      {
        "idMatricula": 5,
        "nombre": "Propuesta Redes",
        "lineaInvestigacion": "",
        "posibleTutor": "",
        "anoEmpezoFormacion": "",
        "anoEmpezoInvestigacion": "",
        "justificacionDescripcion": "",
        "alcanceProblema": "",
        "estadoArteBibliografia": "",
        "objetivoGeneral": "",
        "objetivoEspecifico": "",
        "propuestaMetodologica": "",
        "urlCronograma": "",
        "estado": "SinRevisor",
        "createdAt": "2016-12-13T14:39:52.199Z",
        "updatedAt": "2016-12-13T14:39:52.199Z",
        "id": 5
      }
    ],
    "idUsuario": {
      "nombre": "Estefania Gonzales",
      "cedula": "1312467282",
      "correo": "eadeptog@gmail.com",
      "activo": "Activo",
      "createdAt": "2016-12-13T14:39:52.095Z",
      "updatedAt": "2016-12-13T14:39:52.095Z",
      "id": 3
    },
    "idPeriodoProgDoct": {
      "nombre": "2016-A",
      "idProgramaDoctoral": 1,
      "activo": "Inactivo",
      "createdAt": "2016-12-13T14:39:51.366Z",
      "updatedAt": "2016-12-13T14:39:51.366Z",
      "id": 1
    },
    "estado": "PreMatriculado",
    "createdAt": "2016-12-13T14:39:52.175Z",
    "updatedAt": "2016-12-13T14:39:52.175Z",
    "id": 5
  },
  {
    "PropuestaDoctorales": [
      {
        "idMatricula": 6,
        "nombre": "Propuesta Redes",
        "lineaInvestigacion": "",
        "posibleTutor": "",
        "anoEmpezoFormacion": "",
        "anoEmpezoInvestigacion": "",
        "justificacionDescripcion": "",
        "alcanceProblema": "",
        "estadoArteBibliografia": "",
        "objetivoGeneral": "",
        "objetivoEspecifico": "",
        "propuestaMetodologica": "",
        "urlCronograma": "",
        "estado": "SinRevisor",
        "createdAt": "2016-12-13T14:39:52.206Z",
        "updatedAt": "2016-12-13T14:39:52.206Z",
        "id": 6
      }
    ],
    "idUsuario": {
      "nombre": "Estefania Gonzales",
      "cedula": "1312467282",
      "correo": "eadeptog@gmail.com",
      "activo": "Activo",
      "createdAt": "2016-12-13T14:39:52.095Z",
      "updatedAt": "2016-12-13T14:39:52.095Z",
      "id": 3
    },
    "idPeriodoProgDoct": {
      "nombre": "2016-B",
      "idProgramaDoctoral": 1,
      "activo": "Inactivo",
      "createdAt": "2016-12-13T14:39:51.368Z",
      "updatedAt": "2016-12-13T14:39:51.368Z",
      "id": 2
    },
    "estado": "PreMatriculado",
    "createdAt": "2016-12-13T14:39:52.177Z",
    "updatedAt": "2016-12-13T14:39:52.177Z",
    "id": 6
  }
];

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
