import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../../../config';
import { Observable } from 'rxjs';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root',
})
export class AuthuserService {
  constructor(private http: HttpClient,private categoryService:CategoryService) {}
  private baseUrl: string = AppConfig.baseUrl;

  isAuthenticated(): boolean {
    const token = localStorage.getItem('authToken');
    return !!token; 
  }

  userRegister(body: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/registerUser`, body);
  }

  loginUser(body:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/loginUser`,body)
  }
  getUser(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getUsers`,{ headers: this.categoryService.getHeaders() });
  }

  deleteUser(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/deleteUser/${id}`,{ headers: this.categoryService.getHeaders() })
  }
}
