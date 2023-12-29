import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../../../config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthuserService {
  constructor(private http: HttpClient) {}
  private baseUrl: string = AppConfig.baseUrl;

  userRegister(body: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/registerUser`, body);
  }

  loginUser(body:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/loginUser`,body)
  }
  getUser(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getUsers`);
  }

  deleteUser(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/deleteUser/${id}`)
  }
}
