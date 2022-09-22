import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp404Component } from './shared/comp404/comp404.component';

const routes: Routes = [
  //FORMA DE CARGAS UN MODULO CON LAS RUTAS HIJAS EN UNA RUTA PRINCIPAL//
  {
    path:'auth', 
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'heroes', 
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule)
  },
  //
  {path:'404', component: Comp404Component},
  {path:'**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
