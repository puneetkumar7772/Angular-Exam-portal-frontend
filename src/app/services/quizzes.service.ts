import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from '../../../config';

@Injectable({
  providedIn: 'root',
})
export class QuizzesService {
  constructor(private http: HttpClient) {}
  private baseUrl: string = AppConfig.baseUrl;

  addQuizzes(body:string): Observable<any> {
    return this.http.post(`${this.baseUrl}/addQuizze`, body);
  }

  viewQuizzes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getQuizze`);
  }

  deleteQuizzes(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/deleteQuiz/${id}`);
  }

  getQuizById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getQuizById/${id}`);
  }
  getQuizByCategoryName(category:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/getQuizze/${category}`)

  }
}
