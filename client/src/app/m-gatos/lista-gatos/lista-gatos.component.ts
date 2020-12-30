import { Component, OnInit } from '@angular/core';

import { GatoService } from "../services/gato.service";
import { Gato } from "../interfaces/gato";

@Component({
  selector: 'app-lista-gato',
  templateUrl: './lista-gatos.component.html',
  styleUrls: ['./lista-gatos.component.css']
})

export class ListaGatoComponent implements OnInit {

  gatos: Gato[] = [];

  constructor(private gatoService: GatoService) { }

  ngOnInit(): void {
    this.getGatos();
  }

  getGatos() {
    this.gatoService.getGatos().subscribe(
      res => {
        this.gatos = res['gatos'];
      },
      err => console.log(err)
    )
  }

  deleteGato(id: string) {
    this.gatoService.deleteGato(id)
      .subscribe(
        res => {
          this.getGatos();
        },
        err => console.log(err)
      )
  }

}
