import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Scenary } from '../Model/Scenary';

@Injectable({
  providedIn: 'root'
})
export class ListarEscService {


 private  Url='http://localhost:8080/ScenarySports/api/Scenary';
 constructor(private http:HttpClient) { }

   readAll():Observable<Scenary[]>{
    return this.http.get<Scenary[]>('${this.Url}/lista');
   }
}
