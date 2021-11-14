import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { baseURL } from './baseUrl';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public result: any = [];
  obj: any = [];
  constructor(private http:HttpClient) { }

  loginPost(item: any): Observable<any> {
    this.obj = item;
    let url = baseURL+'api/user/login';
    return this.http.post<any>(url, this.obj); 
 }


}

const defaultHttpOptions = {  
  headers: new HttpHeaders()  
}; 

const httpOptions = {  
  headers: new HttpHeaders({  
    'Content-Type': 'application/json; charset=utf-8',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': 'https://localhost:44317',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Headers': 'X-Requested-With,content-type'
  })  
}; 

