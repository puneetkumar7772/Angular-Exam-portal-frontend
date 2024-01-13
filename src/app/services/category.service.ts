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

  addCategory(body: any): Observable<any> {
    const authToken = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    });
    return this.http.post(`${this.baseUrl}/addCategory`, body, { headers });
  }

  viewCategory(): Observable<any> {
    const authToken = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    });
    return this.http.get(`${this.baseUrl}/getCategories`, { headers });
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getCategories/${id}`);
  }

  getCategoryById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getCategory/${id}`);
  }

  getCategoryByIdAndUpdate(id: number, body: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/updatecategory/${id}`, body);
  }
}
