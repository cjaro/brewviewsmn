import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Brew } from '../models/brew.model';

const baseUrl = "http://localhost:8080/api/visits";

@Injectable({
  providedIn: 'root'
})
export class BrewService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Brew[]> {
    return this.http.get<Brew[]>(baseUrl);
  }
  get(id: any): Observable<Brew> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByName(name: any): Observable<Brew[]> {
    return this.http.get<Brew[]>(`${baseUrl}?name=${name}`);
  }
}
