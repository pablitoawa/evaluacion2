import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  private API_USUARIOS = 'http://localhost:3000/users';

  ///Leer - GET///
  getUsuarios(): Observable<any> {
    return this.http.get(this.API_USUARIOS);
  }

  ///Crear - POST///
  postUsuarios(usuario: JSON): Observable<any> {
    return this.http.post(this.API_USUARIOS, usuario);
  }

  ///Actualizar - PUT///
  putUsuarios(usuario: any): Observable<any> {
    return this.http.put(`${this.API_USUARIOS}/${usuario.id}`, usuario);
  }

  ///Borrar - DELETE///
  deleteUsuarios(id: any): Observable<any> {
    return this.http.delete(`${this.API_USUARIOS}/${id}`);
  }
}
