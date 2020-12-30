import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs"

import { Gato } from "../interfaces/gato";

@Injectable({
  providedIn: 'root'
})
export class GatoService {

  BASE_URL: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getGatos(): Observable<Gato[]> {
    return this.http.get<Gato[]>(`${this.BASE_URL}/gatos`);
  }

  getGato(id): Observable<Gato>{
    return this.http.get<Gato>(`${this.BASE_URL}/gatos/${id}`)
  }

  createGato(gato: Gato): Observable<Gato>{
    return this.http.post<Gato>(`${this.BASE_URL}/gatos`, gato);
  }

  updateGato(id, gato: Gato): Observable<Gato> {
    return this.http.put<Gato>(`${this.BASE_URL}/gatos/${id}`, gato);
  }

  deleteGato(id): Observable<Gato> {
    return this.http.delete<Gato>(`${this.BASE_URL}/gatos/${id}`);
  }
}
