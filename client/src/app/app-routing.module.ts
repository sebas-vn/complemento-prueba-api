import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
    path: '', redirectTo: '/imagenes', pathMatch: 'full'
  },
  {
    path: 'imagenes', loadChildren: () => import('./m-imagenes/imagenes.module').then(m=>m.ImagenesModule)
  },
  {
    path: 'gatos', loadChildren: () => import('./m-gatos/gatos.module').then(m=>m.GatosModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
