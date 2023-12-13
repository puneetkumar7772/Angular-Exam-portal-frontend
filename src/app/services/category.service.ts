import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from '../../../config';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  private baseUrl: string = AppConfig.baseUrl;

  addCategory(body:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/addCategory`,body)
  }

  viewCategory():Observable<any>{
    return this.http.get(`${this.baseUrl}/getCategories`)
  }

  deleteCategory(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/getCategories/${id}`)
  }

  getCategoryById(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/getCategory/${id}`)
  }


  getCategoryByIdAndUpdate(id:number,body:any):Observable<any>{
    return this.http.put(`${this.baseUrl}/updatecategory/${id}`,body)
  }


}
