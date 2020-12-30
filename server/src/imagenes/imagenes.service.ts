import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class ImagenesService {

  auth_header = { 'x-api-key': 'f221c99b-304d-4404-b111-cbd3ddccf31a' } ;

  constructor(private http: HttpService) {}

  async getImagenes() {
    const response = await this.http
      .get('https://api.thecatapi.com/v1/images/search?limit=10', {headers: this.auth_header})
      .toPromise();
    return response.data;
  }

  async favoriteImagen(body) {
    const response = await this.http.post('https://api.thecatapi.com/v1/favourites', body, {headers: this.auth_header})
      .toPromise();
    return response.data;
  }

  async getFavoritos(id) {
    const response = await this.http.get(`https://api.thecatapi.com/v1/favourites?sub_id=${id}`, {headers: this.auth_header})
      .toPromise();
    return response.data;
  }
}
