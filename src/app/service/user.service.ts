import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../Model/Usuario';
import { Subject } from 'rxjs';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public loginStatusSubjec = new Subject<boolean>();

  private Url='http://localhost:8080/api/Users/user/login'

  constructor(private http:HttpClient, private cookies: CookieService) { }

  login( user: any): Observable<any> {
    return this.http.post(`${this.Url}`, user);
  }
   //obtener por id
   read(id:number):Observable<Usuario>{
    return this.http.get<Usuario>(`${this.Url}/${id}`);
  }

  setToken(token: string) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }
  getUser() {
    return this.http.get("https://reqres.in/api/Users/user");
  }
  getUserLogged() {
    const token = this.getToken();
    // Aquí iría el endpoint para devolver el usuario para un token
  }
}
