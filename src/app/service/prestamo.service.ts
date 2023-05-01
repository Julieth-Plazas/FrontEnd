import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prestamo } from '../Model/Prestamo';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PrestamoService {
  private Url='http://localhost:8080/api/Bookings/Booking'

  constructor(private http:HttpClient) { }

  readAllBooking():Observable<Prestamo[]>{
    return this.http.get<Prestamo[]>(`${this.Url}`);
  }
  createScenary(booking:Prestamo): Observable<Object>{
    return this.http.post(`${this.Url}`,booking);
  }

  deleteB(id:number):Observable<Object>{

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

