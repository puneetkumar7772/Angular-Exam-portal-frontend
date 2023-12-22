import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../../../config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http:HttpClient) { }

  private baseUrl: string = AppConfig.baseUrl;

  addQuestions(body:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/addQuestion`, body);
  }

  getQuestions():Observable<any>{
    return this.http.get(`${this.baseUrl}/getQuestion`)
  }

  deleteQuestion(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/deleteQuestion/${id}`)

  }

}
