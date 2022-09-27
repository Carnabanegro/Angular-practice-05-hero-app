import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from '../../interface/user.intarface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  usuario : User = {
    id: '',
    usuario: '',
    email: '',
    password: ''

  }

  constructor(private authService: AuthService, private router : Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

    if(localStorage.getItem('user')){
      this.router.navigate(['./heroes'])
    }
  }

  registrar(){
    if (this.usuario.usuario && this.usuario.email && this.usuario.password){
      this.authService.register(this.usuario)
      .subscribe(
        (resp:any) => {
          this._snackBar.open("Cuenta registrada , logee por favor", "OK",{duration: 5000});
          this.router.navigate(['./auth'])
          
        }
      )
    }else{
      this._snackBar.open("Complete todos los campos, por favor", "OK",{duration: 5000});
    }
    
  }

  volver(){
    this.router.navigate(['./auth'])
  }

}
