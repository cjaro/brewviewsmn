import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Visit } from "../models/visit.model";

const baseUrl = "http://localhost:8080/api/visits";

@Injectable({
  providedIn: "root"
})

export class VisitService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Visit[]> {
    return this.http.get<Visit[]>(baseUrl);
  }

  get(id: any): Observable<Visit> {
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

  findByName(name: any): Observable<Visit[]> {
    return this.http.get<Visit[]>(`${baseUrl}?name=${name}`);
  }
}
