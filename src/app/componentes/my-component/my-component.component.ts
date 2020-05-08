import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { UsuarioService } from '../../servicios/usuario.service';

export class validarUsuaio{

}

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  usuario:string;
  constructor(private servU: UsuarioService) { 
    this.usuario=null  }

  ngOnInit() {
  }

  validar(){
    alert(this.usuario)
  }

}