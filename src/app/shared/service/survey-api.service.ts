import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseLogin } from '../model/responseLogin.model';

@Injectable({
  providedIn: 'root'
})
export class SurveyApiService {

  private readonly baseUrl: string = 'http://localhost:5050/api';
  private readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  public handleLogin(userData): Observable<ResponseLogin> {
    return this.httpClient.post<ResponseLogin>(this.baseUrl + '/login', userData, this.httpOptions)
  }
}