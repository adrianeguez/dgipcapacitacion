import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import se usa para importar las librerias
import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { Comp2Component } from './comp2/comp2.component';
import { MyNewDirectiveDirective } from './my-new-directive.directive';
import { MyNewServiceService } from './my-new-service.service';


@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    Comp2Component,
    MyNewDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    MyNewServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
