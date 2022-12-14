import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const rutas: Routes = [
  {path:'', children:[
    {path:'login', component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path: '**', redirectTo: 'login'}
  ]}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( rutas ),
    CommonModule
  ],
  exports:[
    RouterModule
  ]
})
export class AuthRoutingModule { }
