import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AppComponent} from "./app.component";

// Importar lo necesario de las Rutas
import {Routes, RouterModule} from "@angular/router";

// Importando los componentes a usar en las Rutas
import {GatoComponent} from "./gatos/gatos.component";
import {PerroComponent} from "./perros/perros.component";
import {TortugaComponent} from "./tortugas/tortugas.component";


// import se usa para importar las librerias

//Rutas
const rutasDefinidas: Routes = [
  { path: 'gatos',
    component: GatoComponent
  },
  {
    path: 'perros',
    component:  PerroComponent
  },
  { path: 'tortugas',
    component: TortugaComponent
  },
  // { path: 'parametros/:idParametro', component: ParametroComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    GatoComponent,
    PerroComponent,
    TortugaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //Conigurar el servicio de Ruteo
    RouterModule.forRoot(rutasDefinidas)
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
