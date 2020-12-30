import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaGatoComponent } from "./lista-gatos/lista-gatos.component";
import { FormComponent } from "./form/form.component";


const routes: Routes = [

  {
    path: '',
    component: ListaGatoComponent
  },
  {
    path: 'crear',
    component: FormComponent
  },
  {
    path: 'editar/:id',
    component: FormComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatRoutingModule { }
