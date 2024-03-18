import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from '../../../config';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root',
})
export class QuizzesService {
  constructor(private http: HttpClient,private categoryService:CategoryService) {}
  private baseUrl: string = AppConfig.baseUrl;

  addQuizzes(body:string): Observable<any> {
    return this.http.post(`${this.baseUrl}/addQuizze`, body,{ headers: this.categoryService.getHeaders() });
  }

  viewQuizzes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getQuizze`,{ headers: this.categoryService.getHeaders() });
  }
  
  viewQuizzesByStatus(value:string): Observable<any> {
    return this.http.get(`${this.baseUrl}/quizzes?${value}`,{ headers: this.categoryService.getHeaders() });
  }

  deleteQuizzes(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/deleteQuiz/${id}`,{ headers: this.categoryService.getHeaders() });
  }

  getQuizById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getQuizById/${id}`,{ headers: this.categoryService.getHeaders() });
  }
  getQuizByCategoryName(category:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/getQuizze/${category}`,{ headers: this.categoryService.getHeaders() })

  }

  getQuizByIdAndUpdate(id:number,body:any):Observable<any>{
    return this.http.put(`${this.baseUrl}/update/${id}`,body,{ headers: this.categoryService.getHeaders() })

  }
}
