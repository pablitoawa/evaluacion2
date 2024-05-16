import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

  constructor(private http: HttpClient) { }

  private API_ORDENES = 'http://localhost:3001/ordenes';
  getOrdenes():Observable<any> {
    return this.http.get(this.API_ORDENES);
  }

  postOrdenes(orden: JSON):Observable<any> {
    return this.http.post(this.API_ORDENES, orden);
  }
}
