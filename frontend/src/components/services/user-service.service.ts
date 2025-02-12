import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from '../environments/env'; 
import { User } from '../interface/User'; 

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = env.ApiUrl; 
  }

  authenticate(user: User): Observable<HttpResponse<any>> {
    const url = `${this.apiUrl}/api/User/auth`;
    return this.http.post<HttpResponse<any>>(url, user, {
      observe: 'response',  // Isso retorna a resposta completa (status, headers, body)
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json'
      }
    });
  }


  getAllUsers(): Observable<HttpResponse<User[]>> {
    const url = `${this.apiUrl}/users`;
    return this.http.get<User[]>(url, {  
      observe: 'response',
      headers: {
        'Accept': 'application/json'
      }
    });
  }

  createUser(user: User): Observable<any> {
      const headers = new HttpHeaders({
        'Accept': '*/*',
        'Content-Type': 'application/json'
      });
  
      return this.http.post<any>(`${this.apiUrl}/users`, user, { headers });
  }
  

  deleteUser(userId: number): Observable<any> {
    const headers = new HttpHeaders({
      'Accept': '*/*'
    });

    return this.http.delete<any>(`${this.apiUrl}/users/${userId}`, { headers });
  }
  
  updateUser(userId: number, userData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Accept': '*/*',
      'Content-Type': 'application/json'
    });
  
    return this.http.patch<any>(`${this.apiUrl}/users/${userId}`, userData, { headers });
  }

  


  



}
