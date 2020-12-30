import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  BASE_URL: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getImagenes() {
    return this.http.get(`${this.BASE_URL}/imagenes`);
  }

  postImagenFavorito(body) {
    return this.http.post(`${this.BASE_URL}/imagenes/`, body)
  }

  getImagenesFavoritos(sub_id) {
    return this.http.get(`${this.BASE_URL}/imagenes/favourite?sub_id=${sub_id}`);
  }
}
