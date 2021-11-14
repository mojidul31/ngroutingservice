import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { baseURL } from './baseUrl';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  obj: any = [];

  constructor(private http:HttpClient) { }

  getProducts(): Observable<any> {
    let url = baseURL+'api/product/all';
    return this.http.get<any>(url); 
 }

 saveProduct(item: any): Observable<any> {
  this.obj = item;
  let url = baseURL+'api/product';
  return this.http.post<any>(url, this.obj); 
 }

}
