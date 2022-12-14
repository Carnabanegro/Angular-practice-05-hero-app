import { Injectable } from '@angular/core';
import {Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router) { }

  canActivate() : boolean {
    if(localStorage.getItem('user')){
      return true;
    }else{
      this.router.navigate(['./auth'])
      return false;
    }
  }
}
