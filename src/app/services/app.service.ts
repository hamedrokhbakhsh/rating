import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ResponseModel} from '../models/response-model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  url = 'http://localhost:5001';
  constructor(private http: HttpClient) { }
  getQuestion(data: any): Observable<ResponseModel>{
    return this.http.post<ResponseModel>(`${this.url}/get-question` , data);
  }


}
