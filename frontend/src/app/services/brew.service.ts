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
}
