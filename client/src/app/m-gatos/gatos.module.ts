import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { CatRoutingModule } from "./gatos-routing.module";
import { ListaGatoComponent } from "./lista-gatos/lista-gatos.component";
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [ListaGatoComponent, FormComponent],
  imports: [
    CommonModule,
    CatRoutingModule,
    FormsModule
  ]
})
export class GatosModule { }
