import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Escenario } from '../Model/Escenario';
import {catchError }from 'rxjs/operators';

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
 getScenarios(): Observable<Escenario[]> {
   return this.http.get<Escenario[]>(this.Url);
 }

 
//este emetodo sirve para registrar
 createScenary(Scenary:Escenario): Observable<Object>{
   return this.http.post(`${this.Url}`,Scenary);
 }

 updateS(id:number,Scenary:Escenario):Observable<Object>{
   return this.http.put(`${this.Url}/${id}`,Scenary);
 }

 //obtener por id


 read(id:number):Observable<Escenario>{
   return this.http.get<Escenario>(`${this.Url}/${id}`);
 }

 deleteS(id:number):Observable<Object>{

   return this.http.delete(`${this.Url}/${id}`)
   .pipe(catchError((error) => {
     if (error.status === 403) {
       // si el servidor devuelve un código de estado 403 (Forbidden),
       // significa que no se puede eliminar la entidad porque está relacionada con otra tabla
       return throwError('No se puede eliminar el escenario porque está siendo referenciado por otra entidad.');
     } else {
       // si se produce otro tipo de error, se devuelve tal cual
       return throwError(error);
     }
   })
 );
 }
}


