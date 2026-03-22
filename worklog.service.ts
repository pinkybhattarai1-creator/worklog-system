import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Worklog {
  id?: number;
  title: string;
  detail: string;
  work_date: string;  
  hours: number;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class WorklogService {

 apiUrl = 'http://localhost:3000/worklogs';

  constructor(private http: HttpClient) { }

  getAllData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // CREATE
  createData(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  // UPDATE
  updateData(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  // DELETE
  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}