import { Component, OnInit } from '@angular/core';

import { ImagenService } from "../services/imagen.service";

@Component({
  selector: 'app-lista-imagenes',
  templateUrl: './lista-imagenes.component.html',
  styleUrls: ['./lista-imagenes.component.css']
})
export class ListaImagenesComponent implements OnInit {

  imagenes;
  favoritos: string = 'btn-secundary';

  constructor(private imagenService: ImagenService) { }

  ngOnInit(): void {
    this.getImagenes();
  }

  getImagenes() {
    this.imagenService.getImagenes().subscribe(
      res => {

        this.imagenes = res['imagenes'];
        console.log(this.imagenes);
      },
      err => console.log(err)
    )
  }

  setFavourite(image_id, sub_id) {
    this.imagenService.postImagenFavorito({image_id, sub_id}).subscribe(
      res => {
        console.log(res['imagenes']);
        this.favoritos = 'btn-success';
      },
      err => console.log(err)
    )
  }

  getFavourite(sub_id) {
    this.imagenService.getImagenesFavoritos({sub_id}).subscribe(
      res => {
        console.log(res['imagenes']);
      },
      err => console.log(err)
    )
  }

}
