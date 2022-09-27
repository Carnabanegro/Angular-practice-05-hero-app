import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interface/user.intarface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor( private http : HttpClient) { }

  getForId(id : string) : Observable<User>{
    return this.http.get<User>(`${environment.url}/usuarios/${id}`)
  }


  login(email:string,pass: string): Observable<User>{
    return  this.http.get<User>(`${environment.url}/usuarios/?email=${email}&password=${pass}`)
  }

  register(usuario: User): Observable<User>{
    return this.http.post<User>(`${environment.url}/usuarios`,usuario)
  }

  logout(){
    localStorage.removeItem('user');
    localStorage.removeItem('_id');
  }

  updateProfile(user: User,_id :string): Observable<User>{
    console.log(user)
    
    return this.http.put<User>(`${environment.url}/usuarios/${_id}`,user)
  }
}
