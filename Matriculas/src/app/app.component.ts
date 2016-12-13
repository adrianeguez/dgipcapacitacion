import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';

  numeroUsuario:number = 2;

  
  constructor(){


  }

 

  holaMundo(){
    console.log('Hola Mundo');
  }






}
