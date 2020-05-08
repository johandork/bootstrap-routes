import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './../clases/usuario';

@Injectable()
export class UsuarioService {

  private 

  private url = 'https://jsonplaceholder.typicode.com/users'
  constructor(private http: HttpClient) { }

  login(id:number):Observable<Usuario>{
    return this.http.get<Usuario>(this.url+'/'+id)
  }

}