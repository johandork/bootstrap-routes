import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MyComponentComponent } from './componentes/my-component/my-component.component';
import { HolaComponent } from './componentes/hola/hola.component';
import { HolaServicioService } from './servicios/hola-servicio.service';
import { AppRoutingModule } from './app.routing.module';
import { UsuarioService } from './servicios/usuario.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports:      [ BrowserModule, FormsModule,  AppRoutingModule, HttpClientModule],
  bootstrap:    [ AppComponent ],
  providers:    [HolaServicioService, UsuarioService]
})
export class AppModule { }
