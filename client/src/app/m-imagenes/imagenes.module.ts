import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaImagenesComponent } from './lista-imagenes/lista-imagenes.component';
import { ImageRoutingModel } from "./imagenes-routing.module";



@NgModule({
  declarations: [ListaImagenesComponent],
  imports: [
    CommonModule,
    ImageRoutingModel
  ]
})
export class ImagenesModule { }
