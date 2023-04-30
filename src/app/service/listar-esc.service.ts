import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Escenario } from '../Model/Escenario';

@Injectable({
  providedIn: 'root'
})
export class ListarEscService {
  // obtiene el listado de todos los empleados en el backend 
  private Url='http://localhost:8080/api/Scenary/Scenarys'

  constructor(private http:HttpClient) { }


  readAllScenarys():Observable<Escenario[]>{
    return this.http.get<Escenario[]>(`${this.Url}`);
  }
  
//este emetodo sirve para registrar
  createScenary(Scenary:Escenario): Observable<Object>{
    return this.http.post(`${this.Url}`,Scenary);
  }

  updateS(id:number,Scenary:Escenario):Observable<Object>{
    return this.http.put(`${this.Url}/${id}`,Scenary);
  }

  //obtener por id
  read(id:number):Observable<Object>{
    return this.http.get<Escenario>(`${this.Url}/${id}`);
  }

  deleteS(id:number):Observable<Object>{
    return this.http.delete(`${this.Url}/${id}`);
  }
}
