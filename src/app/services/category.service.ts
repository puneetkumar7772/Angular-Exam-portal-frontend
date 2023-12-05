import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  baseUrl='http://localhost:4000/examportal'

  addCategory(body:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/addCategory`,body)
  }

  viewCategory():Observable<any>{
    return this.http.get(`${this.baseUrl}/getCategories`)
  }

  deleteCategory(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/getCategories/${id}`)
  }


}
