import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from '../../../config';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}
  private baseUrl: string = AppConfig.baseUrl;

  getHeaders(): HttpHeaders {
    const authToken = localStorage.getItem('authToken');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    });
  }

  addCategory(body: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addCategory`, body, { headers: this.getHeaders() });
  }

  viewCategory(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getCategories`,{ headers: this.getHeaders() });
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getCategories/${id}`, { headers: this.getHeaders() });
  }
  getCategoryById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getCategory/${id}`,{ headers: this.getHeaders() });
  }

  getCategoryByIdAndUpdate(id: number, body: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/updatecategory/${id}`, body,{ headers: this.getHeaders() });
  }
}
