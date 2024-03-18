import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../../../config';
import { Observable } from 'rxjs';
import { AuthuserService } from './authuser.service';
import { CategoryService } from './category.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http:HttpClient,private categoryService:CategoryService) { }

  private baseUrl: string = AppConfig.baseUrl;

  addQuestions(body:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/addQuestion`, body, { headers: this.categoryService.getHeaders() });
  }

  getQuestionsbyQuizId(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/getQuestion/${id}`, { headers: this.categoryService.getHeaders() })
  }

  deleteQuestion(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/deleteQuestion/${id}`, { headers: this.categoryService.getHeaders() })

  }

}
